import { Component, OnInit } from '@angular/core';
import { ThemeService } from '../services/theme.service';

@Component({
  selector: 'app-template',
  templateUrl: './template.page.html',
  styleUrls: ['./template.page.scss'],
})
export class TemplatePage {

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

  LightTheme(){
    this.thememanager.LightTheme('screen');
    this.thememanager.LightTheme('menu');
  }
  DarkTheme(){
    this.thememanager.DarkTheme('screen');
    this.thememanager.DarkTheme('menu');
  }

}
