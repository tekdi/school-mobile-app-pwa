import { Injectable } from '@angular/core';
import { config } from 'configuration/environment.prod';
import { TranslateService } from '@ngx-translate/core';
import { ApiService, DbService } from '.';
import { ApiHttpRequestType, ApiRequest } from './api/model/api.request';
import { catchError, lastValueFrom, map, tap } from 'rxjs';
import { ApiResponse } from './api/model/api.response';
import { Sakhi } from '../appConstants';
import { ChatMessage } from './bot/db/models/chat.message';
import { capSQLiteSet } from '@capacitor-community/sqlite';
import { BotChatEntry } from './bot/db/chat.schema';
import { BotChatEntryMapper } from './bot/db/utils/bot.chat.entry.mapper';
import { Directory, Filesystem } from '@capacitor/filesystem';

@Injectable({
  providedIn: 'root'
})
export class BotApiService {

  constructor(
    private apiService: ApiService,
    private translate: TranslateService,
    private dbService: DbService
  ) { }

  async getBotMessage(text: string, audio: string, botType: string, lang: any): Promise<any> {
    console.log('text ', text, text !== "");
    console.log('audio ', audio, audio !== "");
    let botApiPath = this.getBotApiPath(botType);
    let req: any = {
      input: {},
      output: {
        format: text ? "text" : "audio"
      }
    }
    if (text !== "") {
      req.input = {
        language: lang,
        text: text
      }
    } else if (audio !== "") {
      req.input = {
        language: lang,
        audio: audio
      }
    }
    if (botType !== "story") {
      req.input.audienceType = botType 
    }
    const apiRequest = new ApiRequest.Builder()
      .withHost(config.api.BASE_URL)
      .withPath(botApiPath)
      .withType(ApiHttpRequestType.POST)
      .withBearerToken(true)
      .withBody(req)
      .withLanguge(lang)
      .build()
    return lastValueFrom(this.apiService.fetch(apiRequest).pipe(
      map((response: ApiResponse) => {
        return response;
      }),
      catchError((err) => {
        throw err;
      })
    ));
  }

  getBotApiPath(type: string): string {
    switch (type) {
      case Sakhi.STORY:
        return config.api.BOT_SAKHI_API_PATH;
      case Sakhi.PARENT:
        return config.api.BOT_ACTIVITY_API_PATH;
      case Sakhi.TEACHER:
        return config.api.BOT_ACTIVITY_API_PATH;
      default:
        return '';
    }
  }

  saveChatMessage(message: ChatMessage): Promise<any> {
    const capSQLiteSet: capSQLiteSet[] = [];
    capSQLiteSet.push({ statement: BotChatEntry.insertQueryWithColumns(), values: BotChatEntryMapper.mapChatToChatValues(message) })
    return this.dbService.executeSet(capSQLiteSet);
  }

  getAllChatMessages(botType: string): Promise<Array<ChatMessage>> {
    return this.dbService.readDbData(BotChatEntry.readQuery(), { 'bot_type': botType }).then((chatMessages: any[]) => {
      const chatMessageList: Array<ChatMessage> = []
      if(chatMessages && chatMessages.length > 0) {
        chatMessages.map((chatMessage: any) => {
          chatMessageList.push(BotChatEntryMapper.mapChatToChatEntryToModel(chatMessage))
        });
      } 
      return chatMessageList;
    });
  }

  updateMessageReactions(identifier: string, reaction: number): Promise<any> {
    const query = `UPDATE ${BotChatEntry.TABLE_NAME}
    SET ${BotChatEntry.COLUMN_NAME_REACTIONS} = ${reaction}
    WHERE ${BotChatEntry.COLUMN_NAME_IDENTIFIER} = '${identifier}';`
    return this.dbService.executeQuery(query);
  }

  async deleteExpiredChatMessages(): Promise<any> {
    const audioFile = await Filesystem.readdir({
      path: '',
      directory: Directory.Data
    });
    console.log(audioFile);
    for (let index = 0; index < audioFile.files.length; index++) {
      const file = audioFile.files[index];
      if(file.uri.endsWith('.wav')) {
        console.log('file uri ', file);
        const oneDay = 24 * 60 * 60 * 1000;
        if(file?.ctime) {
          if((Date.now() - file?.ctime) > oneDay) {
            await Filesystem.deleteFile({path: file.uri, directory: Directory.Data});
          }
          const query = `DELETE FROM ${BotChatEntry.TABLE_NAME} WHERE ${BotChatEntry.COLUMN_NAME_TIME_STAMP} <= strftime('%s', datetime('now', '-1 day'));`
          return this.dbService.executeQuery(query);
        }
      }
    }
  }
}
