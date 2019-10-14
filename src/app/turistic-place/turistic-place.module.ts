import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { TuristicPlacePage } from './turistic-place.page';

const routes: Routes = [
  {
    path: '',
    component: TuristicPlacePage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [TuristicPlacePage]
})
export class TuristicPlacePageModule {}
