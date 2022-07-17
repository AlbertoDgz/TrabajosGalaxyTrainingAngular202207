import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { CustomerService } from 'src/app/service/customer.service';
import { Customers } from '../../models/customers.model';

@Component({
  selector: 'app-customers-editar',
  templateUrl: './customers-editar.component.html',
  styleUrls: ['./customers-editar.component.css']
})
export class CustomersEditarComponent implements OnInit {
  editCustomer!: FormGroup;
  submited: boolean = false;
  
    constructor(
        private formBuilder : FormBuilder, 
        private customerService: CustomerService, 
        private router: Router, 
        private activatedRoute: ActivatedRoute
        ) {
      this.editCustomer = formBuilder.group({        
        codigo:['',Validators.required],
        nombre:['',Validators.required],
      })
     }



  ngOnInit(): void {
    this.activatedRoute.params.subscribe(res=>{
      let id = res["id"];
      this.customerService.getCustomer(id).subscribe(res=>{
        this.editCustomer.setValue({
          codigo: res.id,
          nombre: res.name
        });
      });

    });
  }

  editarCustomer() {
    this.submited=true;
    if(this.editCustomer.invalid) return;
    const customer: Customers={
      id : this.editCustomer.value.codigo,      
      name: this.editCustomer.value.nombre
    }

    this.customerService.postUpdateCustomers(customer).subscribe(res=>this.router.navigate(['pages/customerlistar']));
  }
}
