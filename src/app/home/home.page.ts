import { Component, OnInit} from '@angular/core';
import { TemplatePage } from '../template/template.page';


@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage extends TemplatePage implements OnInit {

  ngOnInit() {
    this.LightTheme(); 
  }

 
}
