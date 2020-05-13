import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  {
    path: '',
    redirectTo: 'inscripcion',
    pathMatch: 'full'
  },
  {
    path: 'sesion',
    loadChildren: () => import('./modules/sesion/sesion.module').then(s => s.SesionModule)
  },
  {
    path: 'intranet',
    loadChildren: () => import('./modules/intranet/intranet.module').then(i => i.IntranetModule)
  },
  {
    path: 'inscripcion',
    loadChildren: () => import('./modules/inscripcion/inscripcion.module').then(n => n.InscripcionModule)
  },
  {
    path: '**',
    redirectTo: '404'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
