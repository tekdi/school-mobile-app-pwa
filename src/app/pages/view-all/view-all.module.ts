import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ViewAllPageRoutingModule } from './view-all-routing.module';

import { ViewAllPage } from './view-all.page';
import { TranslateModule } from '@ngx-translate/core';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ViewAllPageRoutingModule,
    TranslateModule
  ],
  declarations: [ViewAllPage]
})
export class ViewAllPageModule {}
