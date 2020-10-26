import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { BottledwaterPageRoutingModule } from './bottledwater-routing.module';

import { BottledwaterPage } from './bottledwater.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    BottledwaterPageRoutingModule
  ],
  declarations: [BottledwaterPage]
})
export class BottledwaterPageModule {}
