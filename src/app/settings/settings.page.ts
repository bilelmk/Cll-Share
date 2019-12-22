import { Component, OnInit } from '@angular/core';
import { TemplatePage } from '../template/template.page';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.page.html',
  styleUrls: ['./settings.page.scss'],
})
export class SettingsPage extends TemplatePage implements OnInit {

  ngOnInit() {
    this.LightTheme(); 
  }

}
