import { Component, OnInit } from '@angular/core';
import { MenuController } from '@ionic/angular';
import { ThemeService } from 'src/app/services/theme.service';
import { HomePage } from 'src/app/home/home.page';


@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss'],
})
export class MenuComponent implements OnInit {

  constructor(private menu: MenuController, private thememanager: ThemeService, private homepage: HomePage) { }
  

  theme = 'light';

  ngOnInit() {
  }

  LightTheme(){
    this.homepage.LightTheme();
    this.theme = 'light';
  }
  DarkTheme(){
    this.homepage.DarkTheme();
    this.theme = 'dark';
  }
  SwitchTheme(){
    if (this.theme === 'light')
    {
      this.DarkTheme();
    } else
    {
      this.LightTheme();
    }

  }
}
