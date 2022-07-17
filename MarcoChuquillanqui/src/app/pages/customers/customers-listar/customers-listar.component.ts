import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CustomerService } from 'src/app/service/customer.service';
import { Customers } from '../../models/customers.model';

@Component({
  selector: 'app-customers-listar',
  templateUrl: './customers-listar.component.html',
  styleUrls: ['./customers-listar.component.css']
})
export class CustomersListarComponent implements OnInit {

  listarcustomers: Customers[] = [];

  constructor(private customerService:CustomerService, private router: Router) { }

  ngOnInit(): void {   
    this.cargarRegistros();   
  }

  cargarRegistros(){
    this.customerService.getCustomers().subscribe(res=>{
      console.log('Retorno : '+ res);
        this.listarcustomers = res;

    });    
  }

  onRemove(id: number){
    this.customerService.deleteCustomer(id).subscribe((response) => {
      this.cargarRegistros();
    })
  }

  onGet(id: number){
    this.customerService.getCustomer(id).subscribe((response) => {
      this.router.navigate(['/pages/customereditar'] , { queryParams: { Customers: response } });
    })
  }

}
