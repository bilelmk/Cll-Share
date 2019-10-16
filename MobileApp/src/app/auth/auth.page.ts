import { Component, OnInit } from '@angular/core';
import { AuthService } from './auth.service';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';
import { RegisterComponent } from './register/register.component';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.page.html',
  styleUrls: ['./auth.page.scss'],
})
export class AuthPage implements OnInit {
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
  onRegister() {
    this.modalCtrl.create({
      component: RegisterComponent
    })
    .then(modalEL => {
      modalEL.present();
      return modalEL.onDidDismiss();
    })

  }

}
