import { Component, OnInit, ViewChild } from '@angular/core';
import { TemplatePage } from '../template/template.page';
import { CalendarComponent } from 'ionic2-calendar/calendar';

@Component({
  selector: 'app-agenda',
  templateUrl: './agenda.page.html',
  styleUrls: ['./agenda.page.scss'],
})
export class AgendaPage extends TemplatePage implements OnInit {

  currentDate = new Date();

  currentMonth: string;

  @ViewChild(CalendarComponent, {static: false}) myCalendar: CalendarComponent;

  onViewTitleChanged(title: string) {
    this.currentMonth = title;
  }

  ngOnInit() {
    this.LightTheme(); 
  }

}
