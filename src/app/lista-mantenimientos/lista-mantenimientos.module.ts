import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { ListaMantenimientosPage } from './lista-mantenimientos.page';

const routes: Routes = [
  {
    path: '',
    component: ListaMantenimientosPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [ListaMantenimientosPage]
})
export class ListaMantenimientosPageModule {}
