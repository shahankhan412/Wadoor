import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EntercodePage } from './entercode.page';

const routes: Routes = [
  {
    path: '',
    component: EntercodePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EntercodePageRoutingModule {}
