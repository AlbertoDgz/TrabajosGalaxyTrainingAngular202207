import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductListComponent } from './product/product-list/product-list.component';
import { ProductCreateComponent } from './product/product-create/product-create.component';
import { ProductEditComponent } from './product/product-edit/product-edit.component';
import { MatPaginatorModule } from '@angular/material/paginator';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { EmployeeListComponent } from './employee/employee-list/employee-list.component';
import { EmployeeCreateComponent } from './employee/employee-create/employee-create.component';
import { EmployeeEditComponent } from './employee/employee-edit/employee-edit.component';
import { SaleListComponent } from './sale/sale-list/sale-list.component';
import { SaleCreateComponent } from './sale/sale-create/sale-create.component';
import { SaleEditComponent } from './sale/sale-edit/sale-edit.component';

@NgModule({
  declarations: [
    ProductListComponent,
    ProductCreateComponent,
    ProductEditComponent,
    EmployeeListComponent,
    EmployeeCreateComponent,
    EmployeeEditComponent,
    SaleListComponent,
    SaleCreateComponent,
    SaleEditComponent
  ],
  imports: [
    CommonModule,
    MatPaginatorModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule,
    HttpClientModule,
  ],
  exports: [
    ProductListComponent,
    ProductCreateComponent,
    ProductEditComponent,
    EmployeeListComponent,
    EmployeeCreateComponent,
    EmployeeEditComponent,
    SaleListComponent,
    SaleCreateComponent,
    SaleEditComponent
  ]
})
export class PagesModule { }
