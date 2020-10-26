import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DetailbuttonPage } from './detailbutton.page';

const routes: Routes = [
  {
    path: '',
    component: DetailbuttonPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DetailbuttonPageRoutingModule {}
