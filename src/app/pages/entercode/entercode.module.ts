import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { EntercodePageRoutingModule } from './entercode-routing.module';

import { EntercodePage } from './entercode.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    EntercodePageRoutingModule
  ],
  declarations: [EntercodePage]
})
export class EntercodePageModule {}
