import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { PagesComponent } from './pages.component';
import { ProductListComponent } from './product/product-list/product-list.component';
import { ProductCreateComponent } from './product/product-create/product-create.component';
import { ProductEditComponent } from './product/product-edit/product-edit.component';
import { EmployeeListComponent } from './employee/employee-list/employee-list.component';
import { EmployeeCreateComponent } from './employee/employee-create/employee-create.component';
import { EmployeeEditComponent } from './employee/employee-edit/employee-edit.component';
import { SaleListComponent } from './sale/sale-list/sale-list.component';
import { SaleCreateComponent } from './sale/sale-create/sale-create.component';
import { SaleEditComponent } from './sale/sale-edit/sale-edit.component';

const routes: Routes = [
  {
    path: "pages",
    component: PagesComponent,
    children: [
      { path: "productlist", component: ProductListComponent },
      { path: "productcreate", component: ProductCreateComponent },
      { path: "productedit/:id", component: ProductEditComponent },
      { path: "employeelist", component: EmployeeListComponent },
      { path: "employeecreate", component: EmployeeCreateComponent },
      { path: "employeeedit/:id", component: EmployeeEditComponent },
      { path: "salelist", component: SaleListComponent },
      { path: "salecreate", component: SaleCreateComponent },
      { path: "saleedit/:id", component: SaleEditComponent },
      { path: "", redirectTo: "salelist", pathMatch: 'full' }
    ]
  }
]

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class PagesRoutingModule { }
