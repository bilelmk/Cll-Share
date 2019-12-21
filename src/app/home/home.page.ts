import { Component, OnInit} from '@angular/core';
import { ThemeService } from '../services/theme.service';
import { Route } from '@angular/compiler/src/core';


@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {

  theme: string;

  

  constructor(private thememanager: ThemeService ) {}

  getThemeSignal(themesignal: string){
    this.theme = themesignal;
    if (this.theme === 'light'){
      this.LightTheme();
    } else if (this.theme === 'dark'){
      this.DarkTheme();
    }
    console.log(this.theme);
  }

  ngOnInit() {
    this.LightTheme(); 
  }

  LightTheme(){
    this.thememanager.LightTheme('screen');
    this.thememanager.LightTheme('menu');
  }
  DarkTheme(){
    this.thememanager.DarkTheme('screen');
    this.thememanager.DarkTheme('menu');
  }


 
}
