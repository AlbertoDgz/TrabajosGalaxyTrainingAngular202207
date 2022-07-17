import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ClienteService } from 'src/app/service/cliente.service';
import { Cliente } from '../../models/Customer.model';

@Component({
  selector: 'app-cliente-crear',
  templateUrl: './cliente-crear.component.html',
  styleUrls: ['./cliente-crear.component.css']
})
export class ClienteCrearComponent implements OnInit {

  form!:FormGroup;  
  submited:boolean=false;

  constructor(
    private clienteService:ClienteService,
    private router:Router,
    private formBuilder:FormBuilder
  ) { 
    this.form = formBuilder.group({
      id: ['', Validators.required],
      name: ['', Validators.required]
    });
  }

  ngOnInit(): void {
  }

  addCustomer(){
    const cliente:Cliente = {
      id:this.form.value.id,
      name:this.form.value.name,
    }
    this.clienteService
    .add(cliente)
    .subscribe(res=>this.router.navigate(['/pages/clientelistar']));
  }
}
