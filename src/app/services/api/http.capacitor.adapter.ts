import { Injectable } from "@angular/core";
import { CapacitorHttp, HttpResponse } from "@capacitor/core";
import { Observable, Subject } from "rxjs";
import { HttpClient } from "./http.client";
import { ApiHttpRequestType, ApiRequest } from "./model/api.request";
import { ApiResponse } from "./model/api.response";
import searchBody from '../../../assets/mock/onSearch.json';

// Define ContentMetaData interface outside the service class
interface ContentMetaData {
    identifier: string;
    name: string;
    thumbnail: string;
    description: string;
    mimetype: string;
    url: string;
    domain: string;
    curriculargoal: null;
    competencies: null;
    language: string;
    category: string;
    audience: Array<any>;
    focus: string;
    keyword: any;
    status: string;
    createdon: string;
    lastupdatedon: string;
    media?: Array<any>;
    isLiked?: boolean;
}

@Injectable({
    providedIn: 'root'
})
export class HttpCapacitorAdapter implements HttpClient {
    // Move mappedContent inside the methods where it's used
    private http = CapacitorHttp;

    constructor() {}

    get(baseUrl: string, path: string, headers: any, parameters: { [key: string]: string }): Observable<ApiResponse> {
        return this.invokeRequest(ApiHttpRequestType.GET, baseUrl + path, parameters, headers);
    }

    patch(baseUrl: string, path: string, headers: any, body: {}): Observable<ApiResponse> {
        return this.invokeRequest(ApiHttpRequestType.PATCH, baseUrl + path, body, headers);
    }

    post(baseUrl: string, path: string, headers: any, body: {}): Observable<ApiResponse> {
        return this.invokeRequest(ApiHttpRequestType.POST, baseUrl + path, body, headers);
    }

    private invokeRequest(type: ApiHttpRequestType, url: string, parametersOrData: any,
                          headers: { [key: string]: string }): Observable<ApiResponse> {
        const observable = new Subject<ApiResponse>();

        const requestOptions: any = {
            url: url,
            method: type.toLowerCase(),
            headers: headers,
        };

        if (
          type === ApiHttpRequestType.POST ||
          type === ApiHttpRequestType.PATCH
        ) {
            requestOptions['data'] = parametersOrData;
        } else if (
          type === ApiHttpRequestType.GET ||
          type === ApiHttpRequestType.DELETE
        ) {
            requestOptions['params']  = parametersOrData;
        }
        console.log('requestOptions', requestOptions);
        
        this.http.request(requestOptions).then((response: HttpResponse) => {
            response.data = response.data;

            // Move mappedContent inside the response handling block
            const mappedContent: ContentMetaData[] = [];

            response.data.message.catalog.providers.forEach((provider : any) => {
                // Traverse through the items array of each provider
                provider.items.forEach((item: any) => {
                    // Map item properties to ContentMetaData interface format
                    const content: ContentMetaData = {
                        identifier: item.id,
                        name: item.descriptor.name,
                        thumbnail: item?.descriptor?.images.length ? (item?.descriptor?.images[0].url.split("/"))[0] : '', // You can populate this based on item properties
                        description: item.descriptor.long_desc || item.descriptor.short_desc || '',
                        mimetype: item?.descriptor?.PDF?.data ? "application/pdf" : "video/x-youtube", // You can populate this based on item properties
                        url:     item?.descriptor?.PDF?.data
                        ? item.descriptor?.PDF?.data[0]?.url
                        : item?.descriptor?.link ,
                        domain: item.descriptor.domain || '',
                        curriculargoal: null,
                        competencies: null,
                        language: item.descriptor.language || '',
                        category: '', // You can populate this based on item properties
                        audience: [], // You can populate this based on item properties
                        focus: '', // You can populate this based on item properties
                        keyword: [], // You can populate this based on item properties
                        status: '', // You can populate this based on item properties
                        createdon: item.descriptor.createdAt || '',
                        lastupdatedon: item.descriptor.updatedAt || '',
                        media: item.descriptor.media || [],
                        isLiked: false // Default value, change as needed
                    };
            
                    // Push the mapped object into the array
                    mappedContent.push(content);
                    console.log(mappedContent);
                });
            });
            
            if(mappedContent){
            const apiResponse: ApiResponse = {
                body: {
                    "result" : mappedContent},// response.data,
                responseCode : 200,//response.status,
                errorMesg : '',
                headers : response.headers,
                requestHeaders: requestOptions.headers
            }
            console.log('apiResponse', apiResponse);
            observable.next(apiResponse);
            observable.complete();
        }
        }).catch((response) => {
            console.error('error', response);
            const apiResponse: ApiResponse = {
                body: {},
                responseCode : response.status,
                errorMesg : 'SERVER_ERROR',
                headers : response.headers,
                requestHeaders: requestOptions.headers
            }
            try {
                try {
                    response.body = JSON.parse(response.error!);
                } catch (e) {
                    apiResponse.body = response.error;
                    if (response.status <= 0) {
                      throw e;
                    }
                }
                if (response.responseCode >= 400 && response.responseCode <= 499) {
                    observable.error(new Error());
                } else {
                    observable.error(new Error());
                }
            } catch (e) {
                observable.error(new Error());
                observable.complete();
            }
        })

        return observable;
    }
}
