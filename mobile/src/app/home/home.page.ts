import {Component, OnInit} from '@angular/core';
import {MenuController, ModalController} from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit{

  conversation = [
    { text: 'Ahla Achref,CV?', sender: 0, image: 'https://images2.minutemediacdn.com/image/upload/c_crop,h_1193,w_2121,x_0,y_64/f_auto,q_auto,w_1100/v1565279671/shape/mentalfloss/578211-gettyimages-542930526.jpg' },
    { text: 'Sava hmd winty?', sender: 1, image: 'https://www.petmd.com/sites/default/files/Acute-Dog-Diarrhea-47066074.jpg', read: true, delivered: true, sent: true },
    { text: 'HMD', sender: 0, image: 'https://images2.minutemediacdn.com/image/upload/c_crop,h_1193,w_2121,x_0,y_64/f_auto,q_auto,w_1100/v1565279671/shape/mentalfloss/578211-gettyimages-542930526.jpg' },
    { text: 'ALORS ?', sender: 1, image: 'https://www.petmd.com/sites/default/files/Acute-Dog-Diarrhea-47066074.jpg', read: true, delivered: true, sent: true },
    { text: 'alors chnawa ?', sender: 0, image: 'https://images2.minutemediacdn.com/image/upload/c_crop,h_1193,w_2121,x_0,y_64/f_auto,q_auto,w_1100/v1565279671/shape/mentalfloss/578211-gettyimages-542930526.jpg' },
    { text: '7atta chaye just nis2l', sender: 1, image: 'https://www.petmd.com/sites/default/files/Acute-Dog-Diarrhea-47066074.jpg', read: false, delivered: true, sent: true },
    { text: 'ah ok', sender: 0, image: 'https://images2.minutemediacdn.com/image/upload/c_crop,h_1193,w_2121,x_0,y_64/f_auto,q_auto,w_1100/v1565279671/shape/mentalfloss/578211-gettyimages-542930526.jpg' },
    { text: 'ok bien... ', sender: 1, image: 'https://www.petmd.com/sites/default/files/Acute-Dog-Diarrhea-47066074.jpg', read: false, delivered: false, sent: true }

  ]


  constructor(
      private modalCtrl: ModalController,
      private menuCtrl: MenuController
  ) { }

  ngOnInit() {}

  onCancel() {
    this.modalCtrl.dismiss(null, 'cancel');
  }
  ionViewDidEnter() {
    this.menuCtrl.enable(false, 'end');
    this.menuCtrl.enable(true, 'start');
    setTimeout(() => {
      this.scrollToBottom();
    }, 10);

  }
  scrollToBottom(){
    let content = document.getElementById("chat-container");
    let parent = document.getElementById("chat-parent");
    let scrollOptions = {
      left: 0,
      top: content.offsetHeight
    };
    parent.scrollTo(scrollOptions);
  }

}
