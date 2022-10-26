import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ModalTwoPage } from './modal-two.page';

const routes: Routes = [
  {
    path: '',
    component: ModalTwoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ModalTwoPageRoutingModule {}
