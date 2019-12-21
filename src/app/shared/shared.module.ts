import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MenuComponent } from '../components/menu/menu.component';
import { IonicModule } from '@ionic/angular';
import { ThemeService } from 'src/app/services/theme.service';

@NgModule({
  declarations: [MenuComponent],
  imports: [
    CommonModule,
    IonicModule,
  ],
  providers: [ThemeService],
  exports: [MenuComponent],
})
export class SharedModule { }
