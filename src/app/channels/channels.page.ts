import { Component, OnInit } from '@angular/core';
import { ThemeService } from 'src/app/services/theme.service';

@Component({
  selector: 'app-channels',
  templateUrl: './channels.page.html',
  styleUrls: ['./channels.page.scss'],
})
export class ChannelsPage implements OnInit {

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
