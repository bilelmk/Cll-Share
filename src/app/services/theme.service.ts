import { Injectable, OnInit } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class ThemeService {

  ngOnInit(){}


  LightTheme(id: string) {
    const component = document.getElementById(id);

    component.style.setProperty('--ion-background-color', 'white');
    component.style.setProperty('--ion-text-color', '#222428');

  }
  DarkTheme(id: string) {
    const component = document.getElementById(id);

    component.style.setProperty('--ion-background-color', '#222428');
    component.style.setProperty('--ion-text-color', 'white');
  }

  
}
