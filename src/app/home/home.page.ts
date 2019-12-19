import { Component, OnInit} from '@angular/core';
import { ThemeService } from '../services/theme.service';


@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  constructor(private thememanager: ThemeService) {}

  ngOnInit() {
    this.LightTheme(); 
  }

  LightTheme(){
    this.thememanager.LightTheme('screen');
    this.thememanager.LightTheme('menu');

    console.log('Screen changed to white !');
  }
  DarkTheme(){
    this.thememanager.DarkTheme('screen');
    this.thememanager.DarkTheme('menu');

    console.log('Screen changed to black !');
  }


 
}
