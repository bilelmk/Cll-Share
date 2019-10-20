import { Component, OnInit } from '@angular/core';
import {MenuController, ModalController} from '@ionic/angular';
import {NgForm} from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage implements OnInit {
  constructor(
      private modalCtrl: ModalController,
      private menuCtrl: MenuController
  ) { }

  ngOnInit() {

  }

  register(form: NgForm) {
  }
}
