import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { CustomerService } from 'src/app/service/customer.service';
import { Customers } from '../../models/customers.model';

@Component({
  selector: 'app-customers-crear',
  templateUrl: './customers-crear.component.html',
  styleUrls: ['./customers-crear.component.css']
})
export class CustomersCrearComponent implements OnInit {

  createCustomer!: FormGroup;
  submited: boolean = false;
  
    constructor(private formBuilder : FormBuilder, private customerService: CustomerService, private router: Router) {
      this.createCustomer = formBuilder.group({
        nombre:['',Validators.required],
      })
     }
  
    ngOnInit(): void {
  
    }
    agregarCustomer() {
      this.submited=true;
      if(this.createCustomer.invalid) return;
      const customer: Customers={
        id : this.createCustomer.value.id,
        name: this.createCustomer.value.nombre
      }
      this.customerService.postInsertCustomers(customer).subscribe(res=>this.router.navigate(['pages/customerlistar']));
    }

}
