import { Component, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { PagesComponent } from './pages.component';
import { ProductListComponent } from './product/product-list/product-list.component';
import { ProductCreateComponent } from './product/product-create/product-create.component';
import { ProductEditComponent } from './product/product-edit/product-edit.component';
import { EmpleadoListarComponent } from './empleado/empleado-listar/empleado-listar.component';
import { EmpleadoCrearComponent } from './empleado/empleado-crear/empleado-crear.component';
import { EmpleadoEditarComponent } from './empleado/empleado-editar/empleado-editar.component';
import { SalesListarComponent } from './sales/sales-listar/sales-listar.component';
import { SalesCrearComponent } from './sales/sales-crear/sales-crear.component';
import { SalesEditarComponent } from './sales/sales-editar/sales-editar.component';

const routes:Routes =[{
  path:"pages",
  component:PagesComponent,
  children:[
    {path:"productlist", component:ProductListComponent},
    {path:"productcreate", component:ProductCreateComponent},
    {path:"productedit/:id", component:ProductEditComponent},
    {path:"empleadolist", component:EmpleadoListarComponent},
    {path:"empleadocreate", component:EmpleadoCrearComponent},
    {path:"empleadoedit/:id", component:EmpleadoEditarComponent},
    {path:"saleslist", component:SalesListarComponent},
    {path:"salecreate", component:SalesCrearComponent},
    {path:"salesedit/:id", component:SalesEditarComponent},
    {path:"", redirectTo:"productlist", pathMatch: 'full'}
  ]
}]

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],
  exports:[
    RouterModule
  ]
})
export class PagesRoutingModule { }
