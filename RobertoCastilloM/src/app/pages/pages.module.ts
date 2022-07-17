import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductListComponent } from './product/product-list/product-list.component';
import { ProductCreateComponent } from './product/product-create/product-create.component';
import { ProductEditComponent } from './product/product-edit/product-edit.component';
import { EmpleadoListarComponent } from './empleado/empleado-listar/empleado-listar.component';
import { EmpleadoCrearComponent } from './empleado/empleado-crear/empleado-crear.component';
import { EmpleadoEditarComponent } from './empleado/empleado-editar/empleado-editar.component';
import { SalesListarComponent } from './sales/sales-listar/sales-listar.component';
import { SalesCrearComponent } from './sales/sales-crear/sales-crear.component';
import { SalesEditarComponent } from './sales/sales-editar/sales-editar.component';
import { MatPaginatorModule } from '@angular/material/paginator';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';


@NgModule({
  declarations: [
    ProductListComponent,
    ProductCreateComponent,
    ProductEditComponent,
    EmpleadoListarComponent,
    EmpleadoCrearComponent,
    EmpleadoEditarComponent,
    SalesListarComponent,
    SalesCrearComponent,
    SalesEditarComponent
  ],
  imports: [
    CommonModule,
    MatPaginatorModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    RouterModule
  ],
  exports: [
  ProductListComponent,
  ProductCreateComponent,
  ProductEditComponent,
  EmpleadoListarComponent,
  EmpleadoCrearComponent,
  EmpleadoEditarComponent,
  SalesListarComponent,
  SalesCrearComponent,
  SalesEditarComponent
  ]
})
export class PagesModule { }
