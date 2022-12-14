import { Component } from '@angular/core';
import { ModalController, IonRouterOutlet } from '@ionic/angular';
// TODO: notice that we import both the modal-base, AND the modal-content.page.
import { ModalBaseComponent } from '../components/modal-base/modal-base.component';
import { ModalContentPage } from '../pages/modal-content/modal-content.page';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  constructor(private modalController: ModalController,
              private routerOutlet: IonRouterOutlet
  ) {
  }

  async presentModal() {
    const modal = await this.modalController.create({
      presentingElement: this.routerOutlet.nativeEl,
      component: ModalBaseComponent,
      componentProps: {
        rootPage: ModalContentPage,
        params: {stuff1: 'one', stuff2: 'two'}
      },
    });

    await modal.present();
  }

}
