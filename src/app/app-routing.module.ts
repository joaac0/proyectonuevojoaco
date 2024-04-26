import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InicioComponent } from './inicio/inicio.component';
import { GaleriaComponent } from './galeria/galeria.component';
import { CarruselComponent } from './carrusel/carrusel.component';

const routes: Routes = [
  {path:"inicio",component:InicioComponent},
  {path:"galeria",component:GaleriaComponent},
  {path:"carrusel",component:CarruselComponent},

  {
    path:"",loadChildren:()=>import("./modules/inicio/inicio.module").then(m=>m.InicioModule)

  }
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }