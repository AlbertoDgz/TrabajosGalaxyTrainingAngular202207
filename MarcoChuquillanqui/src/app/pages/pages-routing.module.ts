import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { PagesComponent } from './pages.component';
import { CustomersListarComponent } from './customers/customers-listar/customers-listar.component';
import { CustomersCrearComponent } from './customers/customers-crear/customers-crear.component';
import { EmployeesCrearComponent } from './employees/employees-crear/employees-crear.component';
import { EmployeesListarComponent } from './employees/employees-listar/employees-listar.component';
import { SalesListarComponent } from './sales/sales-listar/sales-listar.component';
import { SalesCrearComponent } from './sales/sales-crear/sales-crear.component';
import { ProductsCrearComponent } from './products/products-crear/products-crear.component';
import { ProductsListarComponent } from './products/products-listar/products-listar.component';
import { CustomersEditarComponent } from './customers/customers-editar/customers-editar.component';
import { EmployeesEditarComponent } from './employees/employees-editar/employees-editar.component';
import { ProductsEditarComponent } from './products/products-editar/products-editar.component';

const routes: Routes=[  
  { path:'pages', 
    component: PagesComponent, 
    children:[
    { path:'customerlistar', component: CustomersListarComponent},
    { path:'customercrear', component: CustomersCrearComponent},    
    { path:'customereditar/:id', component: CustomersEditarComponent},    
    { path:'employeeslistar', component: EmployeesListarComponent},
    { path:'employeescrear', component: EmployeesCrearComponent},
    { path:'employeeeditar/:id', component: EmployeesEditarComponent},    
    { path:'saleslistar', component: SalesListarComponent},
    { path:'salescrear', component: SalesCrearComponent},
    { path:'productscrear', component: ProductsCrearComponent},
    { path:'productslistar', component: ProductsListarComponent},
    { path:'productseditar/:id', component: ProductsEditarComponent},    
    { path:'', redirectTo:'saleslistar', pathMatch:'full'}
    ]
  }, 
]

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forChild(routes)
  ]
})
export class PagesRoutingModule { }
