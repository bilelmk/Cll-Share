import { Component, OnInit } from '@angular/core';
import { MembersService } from './members.service';
import { Router } from '@angular/router';
import { MessagesComponent } from './messages/messages.component';
import { ModalController, MenuController } from '@ionic/angular';


@Component({
  selector: 'app-members',
  templateUrl: './members.page.html',
  styleUrls: ['./members.page.scss'],
})
export class MembersPage implements OnInit {
  public loadedMembers = [];
  constructor(
    private membersService: MembersService,
    private router: Router,
    private modalCtrl: ModalController
  ) { }

  ngOnInit() {
    this.loadedMembers = this.membersService.members;
  }
  sendMessage(memberId: string) {
    this.modalCtrl.create({
      component: MessagesComponent
    })
    .then(modalEl => {
      modalEl.present();
      return modalEl.onDidDismiss();
    });
  }



}
