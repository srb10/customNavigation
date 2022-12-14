import { Component, OnInit } from '@angular/core';
import { ModalController, IonNav, Platform, NavParams } from '@ionic/angular';

@Component({
  selector: 'app-modal-content',
  templateUrl: './modal-content.page.html',
  styleUrls: ['./modal-content.page.scss'],
})
export class ModalContentPage implements OnInit {
  level = 0;
  nextPage = ModalContentPage;
  otherStuff;

  constructor(private modalController: ModalController,
              private nav: IonNav,
              private navParams: NavParams,
              private platform: Platform
  ) {
    this.platform.backButton.subscribeWithPriority(101, async () => {
      const canGoBack = await this.nav.canGoBack();
      if (canGoBack) {
        this.nav.pop();
      } else {
        await this.modalController.dismiss();
      }
      return;
    });

    console.log('MY ROOT: ', this.navParams.data);
  }

  ngOnInit() {
    console.log('otherStuff:', this.otherStuff);
  }

  goForward() {
    this.nav.push(this.nextPage, {level: this.level + 1});
  }

  goToComponentTwo() {
    this.nav.push(this.nextPage, {level: this.level + 1});
  }

  goRoot() {
    this.nav.popToRoot();
  }

  close() {
    this.modalController.dismiss();
  }

}
