import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import {MatPaginatorModule} from '@angular/material/paginator';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CustomersListarComponent } from './customers/customers-listar/customers-listar.component';
import { CustomersCrearComponent } from './customers/customers-crear/customers-crear.component';
import { EmployeesListarComponent } from './employees/employees-listar/employees-listar.component';
import { PagesComponent } from './pages.component';
import { EmployeesCrearComponent } from './employees/employees-crear/employees-crear.component';
import { ProductsCrearComponent } from './products/products-crear/products-crear.component';
import { ProductsListarComponent } from './products/products-listar/products-listar.component';
import { SalesCrearComponent } from './sales/sales-crear/sales-crear.component';
import { SalesListarComponent } from './sales/sales-listar/sales-listar.component';
import { CustomersEditarComponent } from './customers/customers-editar/customers-editar.component';
import { EmployeesEditarComponent } from './employees/employees-editar/employees-editar.component';
import { ProductsEditarComponent } from './products/products-editar/products-editar.component';
import { SalesEditarComponent } from './sales/sales-editar/sales-editar.component';
import { MatTableModule } from '@angular/material/table';


@NgModule({
  declarations: [
    CustomersCrearComponent, 
    CustomersListarComponent, 
    EmployeesListarComponent,
    EmployeesCrearComponent,
    ProductsCrearComponent,
    ProductsListarComponent,
    SalesCrearComponent,
    SalesListarComponent,
    PagesComponent,
    CustomersEditarComponent,
    EmployeesEditarComponent,
    ProductsEditarComponent,
    SalesEditarComponent    
  ],
  exports:[    
    CustomersCrearComponent, 
    CustomersListarComponent, 
    EmployeesListarComponent,
    EmployeesCrearComponent,
    ProductsCrearComponent,
    ProductsListarComponent,
    SalesCrearComponent,
    SalesListarComponent
  ],
  imports: [
    CommonModule,
    RouterModule, MatPaginatorModule, FormsModule, ReactiveFormsModule
  ]
})
export class PagesModule { }
