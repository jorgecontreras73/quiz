import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {FormularioComponent} from '../app/components/formulario/formulario.component'
import { MetropolitanaComponent } from '../app/components/metropolitana/metropolitana.component'
import { BiobioComponent } from '../app/components/biobio/biobio.component'
import { AraucaniaComponent } from '../app/components/araucania/araucania.component'

const routes: Routes = [
  {path:'formulario',component:FormularioComponent},
  {path:'metropolitana',component:MetropolitanaComponent},
  {path:'biobio',component:BiobioComponent},
  {path:'araucania',component:AraucaniaComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
