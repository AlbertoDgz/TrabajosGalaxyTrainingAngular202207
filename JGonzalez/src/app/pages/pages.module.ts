import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PagesComponent } from './pages.component';
import { RouterModule } from '@angular/router';
import {MatPaginatorModule} from '@angular/material/paginator';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SharedModule } from '../shared/shared.module';
import { ProductoListarComponent } from './product/producto-listar/producto-listar.component';
import { ProductoEditarComponent } from './product/producto-editar/producto-editar.component';
import { ProductoCrearComponent } from './product/producto-crear/producto-crear.component';
import { EmpleadoCrearComponent } from './employee/empleado-crear/empleado-crear.component';
import { EmpleadoListarComponent } from './employee/empleado-listar/empleado-listar.component';
import { EmpleadoEditarComponent } from './employee/empleado-editar/empleado-editar.component';
import { ClienteEditarComponent } from './customer/cliente-editar/cliente-editar.component';
import { ClienteListarComponent } from './customer/cliente-listar/cliente-listar.component';
import { ClienteCrearComponent } from './customer/cliente-crear/cliente-crear.component';
import { SalesListarComponent } from './sales/sales-listar/sales-listar.component';
import { SalesEditarComponent } from './sales/sales-editar/sales-editar.component';
import { SalesCrearComponent } from './sales/sales-crear/sales-crear.component';

@NgModule({
  declarations: [
    PagesComponent,
    ProductoListarComponent,
    ProductoEditarComponent,
    ProductoCrearComponent,
    EmpleadoCrearComponent,
    EmpleadoListarComponent,
    EmpleadoEditarComponent,
    ClienteEditarComponent,
    ClienteListarComponent,
    ClienteCrearComponent,
    SalesListarComponent,
    SalesEditarComponent,
    SalesCrearComponent
  ],
  exports:[
    ProductoListarComponent,
    ProductoEditarComponent,
    ProductoCrearComponent,
    EmpleadoCrearComponent,
    EmpleadoListarComponent,
    EmpleadoEditarComponent,
    ClienteEditarComponent,
    ClienteListarComponent,
    ClienteCrearComponent,
    SalesListarComponent,
    SalesEditarComponent,
    SalesCrearComponent],
  imports: [CommonModule, RouterModule, MatPaginatorModule, FormsModule, ReactiveFormsModule, SharedModule],
})
export class PagesModule {}
