import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductoRoutingModule } from './producto-routing.module';
import { ProductoComponent } from './pages/producto/producto.component';
import { InformacionComponent } from './pages/informacion/informacion.component';


@NgModule({
  declarations: [
    ProductoComponent,
    InformacionComponent

  ],
  imports: [
    CommonModule,
    ProductoRoutingModule
  ]
})
export class ProductoModule { }
