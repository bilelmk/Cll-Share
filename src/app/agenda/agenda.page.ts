import { Component, OnInit } from '@angular/core';
import { ThemeService } from '../services/theme.service';
import { TemplatePage } from '../template/template.page';


@Component({
  selector: 'app-agenda',
  templateUrl: './agenda.page.html',
  styleUrls: ['./agenda.page.scss'],
})
export class AgendaPage extends TemplatePage implements OnInit {

  ngOnInit() {
    this.LightTheme(); 
  }

}
