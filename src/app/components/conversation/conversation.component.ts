import { Component, OnInit } from '@angular/core';
import { ThemeService } from 'src/app/services/theme.service';

@Component({
  selector: 'app-conversation',
  templateUrl: './conversation.component.html',
  styleUrls: ['./conversation.component.scss'],
})
export class ConversationComponent implements OnInit {

  constructor(private thememanager: ThemeService) { }

  ngOnInit() {
    this.DarkTheme();
  }

  LightTheme(){
    this.thememanager.LightTheme('inbox');
  }
  DarkTheme(){
    this.thememanager.DarkTheme('inbox');
  }



}
