import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { ChannelmsgPage } from './channelmsg.page';

const routes: Routes = [
  {
    path: '',
    component: ChannelmsgPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [ChannelmsgPage]
})
export class ChannelmsgPageModule {}
