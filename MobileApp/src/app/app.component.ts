import { Component } from '@angular/core';

import { Platform } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
<<<<<<< HEAD
import { Router } from '@angular/router';
import { AuthService } from './auth/auth.service';
=======
>>>>>>> e2438b3167dcbcf7df5aa7adb8feb0c1a21a7044

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss']
})
export class AppComponent {
  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
<<<<<<< HEAD
    private statusBar: StatusBar,
    private router: Router,
    private authService: AuthService
=======
    private statusBar: StatusBar
>>>>>>> e2438b3167dcbcf7df5aa7adb8feb0c1a21a7044
  ) {
    this.initializeApp();
  }

  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }
<<<<<<< HEAD

  onLogout() {
    this.authService.logout();
    this.router.navigateByUrl('/auth');
  }
=======
>>>>>>> e2438b3167dcbcf7df5aa7adb8feb0c1a21a7044
}
