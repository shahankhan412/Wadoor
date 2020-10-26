import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { BottledwaterPage } from './bottledwater.page';

const routes: Routes = [
  {
    path: '',
    component: BottledwaterPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class BottledwaterPageRoutingModule {}
