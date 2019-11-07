import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'lista-mantenimientos',
    pathMatch: 'full'
  },
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then(m => m.HomePageModule)
  },
  {
    path: 'list',
    loadChildren: () => import('./list/list.module').then(m => m.ListPageModule)
  },
  { path: 'lista-mantenimientos', loadChildren: './lista-mantenimientos/lista-mantenimientos.module#ListaMantenimientosPageModule' },
  { path: 'mantenimiento-detalle', loadChildren: './mantenimiento-detalle/mantenimiento-detalle.module#MantenimientoDetallePageModule' },
  { path: 'crear-mantenimiento', loadChildren: './crear-mantenimiento/crear-mantenimiento.module#CrearMantenimientoPageModule' }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
