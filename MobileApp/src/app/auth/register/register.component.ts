import { Component, OnInit } from '@angular/core';
import { ModalController, MenuController } from '@ionic/angular';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],
})
export class RegisterComponent implements OnInit {

  constructor(
    private modalCtrl: ModalController,
    private menuCtrl: MenuController
  ) { }

  ngOnInit() {}
  onCancel() {
    this.modalCtrl.dismiss(null, 'cancel');
  }
  onOpenMenu() {
    this.menuCtrl.toggle();
  }
  register(form: NgForm) {
    
  }
}
