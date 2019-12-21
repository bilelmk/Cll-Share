import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { MenuController } from '@ionic/angular';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss'],
})

export class MenuComponent implements OnInit {

  theme = 'light';

  @Output() messageToEmit = new EventEmitter<string>();

  sendMessageToParent(message: string) {
    this.messageToEmit.emit(message);
  }

  // tslint:disable-next-line: max-line-length
  constructor(private menu: MenuController) {}

  ngOnInit() {}

  /*GetPage(): string {
    return this.router.url;
  }

  LightTheme(){
    // this.homepage.LightTheme();
    this.theme = 'light';
  }
  DarkTheme(){
    // this.homepage.DarkTheme();
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

  }*/
}
