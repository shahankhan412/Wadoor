import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DetailbuttonPageRoutingModule } from './detailbutton-routing.module';

import { DetailbuttonPage } from './detailbutton.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DetailbuttonPageRoutingModule
  ],
  declarations: [DetailbuttonPage]
})
export class DetailbuttonPageModule {}
