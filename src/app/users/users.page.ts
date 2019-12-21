import { Component, OnInit } from '@angular/core';
import { ThemeService } from '../services/theme.service';
import { TemplatePage } from '../template/template.page';

@Component({
  selector: 'app-users',
  templateUrl: './users.page.html',
  styleUrls: ['./users.page.scss'],
})
export class UsersPage extends TemplatePage implements OnInit {

  ngOnInit() {
    this.LightTheme(); 
  }

}
