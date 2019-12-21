import { Component, OnInit } from '@angular/core';
import { ThemeService } from 'src/app/services/theme.service';
import { TemplatePage } from '../template/template.page';

@Component({
  selector: 'app-channels',
  templateUrl: './channels.page.html',
  styleUrls: ['./channels.page.scss'],
})
export class ChannelsPage extends TemplatePage implements OnInit {

  ngOnInit() {
    this.LightTheme(); 
  }
}
