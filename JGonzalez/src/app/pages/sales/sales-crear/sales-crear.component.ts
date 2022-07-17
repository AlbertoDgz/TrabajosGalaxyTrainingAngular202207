import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ClienteService } from 'src/app/service/cliente.service';
import { EmpleadoService } from 'src/app/service/empleado.service';
import { ProductService } from 'src/app/service/product.service';
import { SalesService } from 'src/app/service/sales.service';
import { Cliente } from '../../models/Customer.model';
import { Empleado } from '../../models/Employees.model';
import { Product } from '../../models/product.model';
import { Sales } from '../../models/sales.model';

@Component({
  selector: 'app-sales-crear',
  templateUrl: './sales-crear.component.html',
  styleUrls: ['./sales-crear.component.css']
})
export class SalesCrearComponent implements OnInit {

  form!:FormGroup;  
  submited:boolean=false;

  customer:Cliente[] = [];
  employees:Empleado[] = [];
  products:Product[] = [];

  nroPag:number=1;
  regXPag:number=15;
  totalReg!:number;
  totalPag!:number;

  constructor(
    private salesService:SalesService,
    private clienteService:ClienteService,
    private empleadoService:EmpleadoService,
    private productService:ProductService,
    private router:Router,
    private formBuilder:FormBuilder
  ) { 
    this.form = formBuilder.group({
      id: ['', Validators.required],
      fecha: ['', Validators.required],
      unitPrice: ['', Validators.required],
      quantity: ['', Validators.required],
      totalPrice: ['', Validators.required],
      customer_Id: ['', Validators.required],
      employee_Id: ['', Validators.required],
      product_Id: ['', Validators.required]
    });
  }

  ngOnInit(): void {
    this.listCustomers();
    this.listEmployees();
    this.listProducts();
  }

  addSales(){
    const sales:Sales = {
      id:this.form.value.id,
      date:this.form.value.date,
      unitPrice:this.form.value.unitPrice,
      quantity:this.form.value.quantity,
      totalPrice:this.form.value.totalPrice,
      customer_Id:this.form.value.customer_Id,
      employee_Id:this.form.value.employee_Id,
      product_Id:this.form.value.product_Id,
      customerDTO:this.form.value.cliente,
      employeeDTO:this.form.value.empleado,
      productDTO:this.form.value.product
    }
    this.salesService
    .add(sales)
    .subscribe(res=>this.router.navigate(['/pages/saleslistar']));
  }

  listCustomers(){
    this.clienteService
    .list(this.nroPag, this.regXPag)
    .subscribe(res=>{
      this.customer=res.data,
      this.totalReg=res.totalReg
      this.nroPag=res.pagActual,
      this.regXPag=res.regXPag

      if (this.totalReg % this.regXPag > 0)
        this.totalPag = Math.round(this.totalReg / this.regXPag) + 1;
      else this.totalPag = Math.round(this.totalReg / this.regXPag);
    });
  }
  
  listEmployees(){
    this.empleadoService
    .list(this.nroPag, this.regXPag)
    .subscribe(res=>{
      this.employees=res.data,
      this.totalReg=res.totalReg
      this.nroPag=res.pagActual,
      this.regXPag=res.regXPag

      if (this.totalReg % this.regXPag > 0)
        this.totalPag = Math.round(this.totalReg / this.regXPag) + 1;
      else this.totalPag = Math.round(this.totalReg / this.regXPag);
    });
  }

  listProducts(){
    this.productService
    .list(this.nroPag, this.regXPag)
    .subscribe(res=>{
      this.products=res.data,
      this.totalReg=res.totalReg
      this.nroPag=res.pagActual,
      this.regXPag=res.regXPag

      if (this.totalReg % this.regXPag > 0)
        this.totalPag = Math.round(this.totalReg / this.regXPag) + 1;
      else this.totalPag = Math.round(this.totalReg / this.regXPag);

      
    });
  }

}
