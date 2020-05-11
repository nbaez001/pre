import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RegistroComponent } from './components/registro/registro.component';


const inscripcionRoutes: Routes = [
  {
    path: '',
    children: [
      {
        path: '',
        redirectTo: 'registro',
        pathMatch: 'full'
      }, {
        path: 'registro',
        component: RegistroComponent,
        data: { title: 'Registro' }
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(inscripcionRoutes)],
  exports: [RouterModule]
})
export class InscripcionRoutingModule { }
