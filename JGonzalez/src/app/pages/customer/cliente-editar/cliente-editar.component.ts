import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ClienteService } from 'src/app/service/cliente.service';
import { Cliente } from '../../models/Customer.model';

@Component({
  selector: 'app-cliente-editar',
  templateUrl: './cliente-editar.component.html',
  styleUrls: ['./cliente-editar.component.css']
})
export class ClienteEditarComponent implements OnInit {

  form!:FormGroup;  
  submited:boolean=false;

  constructor(
    private clienteService:ClienteService,
    private router:Router,
    private formBuilder:FormBuilder,
    private activatedRoute: ActivatedRoute
  ) { 
    this.form = formBuilder.group({
      id: ['', Validators.required],
      name: ['', Validators.required]
    });
  }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(res=>{
      let id = res["id"];
      this.clienteService.getById(id).subscribe(res=>{
        this.form.setValue({
          id:res.id,
          name:res.name
        });
      });
    });
  }

  updateCustomer(){
    const cliente:Cliente = {
      id:this.form.value.id,
      name:this.form.value.name
    }
    this.clienteService
    .update(cliente)
    .subscribe(res=>this.router.navigate(['/pages/clientelistar']));
  }
}
