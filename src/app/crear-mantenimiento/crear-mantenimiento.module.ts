import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { CrearMantenimientoPage } from './crear-mantenimiento.page';

const routes: Routes = [
  {
    path: '',
    component: CrearMantenimientoPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [CrearMantenimientoPage]
})
export class CrearMantenimientoPageModule {}
