import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ModalTwoPageRoutingModule } from './modal-two-routing.module';

import { ModalTwoPage } from './modal-two.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ModalTwoPageRoutingModule
  ],
  declarations: [ModalTwoPage]
})
export class ModalTwoPageModule {}
