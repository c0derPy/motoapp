import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { MantenimientoDetallePage } from './mantenimiento-detalle.page';

const routes: Routes = [
  {
    path: '',
    component: MantenimientoDetallePage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [MantenimientoDetallePage]
})
export class MantenimientoDetallePageModule {}
