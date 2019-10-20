import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {ModalController} from '@ionic/angular';
import {NgForm} from '@angular/forms';
import {AuthService} from '../../../services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  isLogin = true;

  constructor(
      private authService: AuthService,
      private router: Router,
      private modalCtrl: ModalController
  ) { }

  ngOnInit() {
  }
  onLogin() {
    this.authService.login();
    this.router.navigateByUrl('/user');
  }
  onSwitchAuthMode() {
    this.isLogin = !this.isLogin;
  }
  onSubmit(form: NgForm) {
    if (!form.valid) {
      return;
    }
    const email = form.value.email;
    const password = form.value.password;
    form.reset();
    console.log(email, password);
  }

  // async onRegister() {
  //   const modal = await this.modalCtrl.create({
  //     component: RegisterComponent,
  //     cssClass : 'my-modal',
  //     // componentProps: {
  //     //   user_id: '55'
  //     // }
  //   });
  //   modal.present();

  //}


}
