import { Component, OnInit } from '@angular/core';
import { MenuController } from '@ionic/angular';


@Component({
  selector: 'app-user',
  templateUrl: './user.page.html',
  styleUrls: ['./user.page.scss'],
})
export class UserPage implements OnInit {

  constructor(
    private menuCtrl: MenuController
  ) { }

  ngOnInit() {
  }
  onOpenMenu() {
    this.menuCtrl.toggle();
  }
}
