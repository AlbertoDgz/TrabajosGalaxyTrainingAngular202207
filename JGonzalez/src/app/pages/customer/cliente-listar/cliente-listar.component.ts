import { Component, OnInit } from '@angular/core';
import { PageEvent } from '@angular/material/paginator';
import { Router } from '@angular/router';
import { ClienteService } from 'src/app/service/cliente.service';
import { Cliente } from '../../models/Customer.model';

@Component({
  selector: 'app-cliente-listar',
  templateUrl: './cliente-listar.component.html',
  styleUrls: ['./cliente-listar.component.css']
})
export class ClienteListarComponent implements OnInit {

  customer:Cliente[] = [];
  
  nroPag:number=1;
  regXPag:number=5;
  totalReg!:number;
  totalPag!:number;

  pageSizeOptions: number[] = [5, 10, 15, 20];
  pageEvent!: PageEvent;
  handlePages(e: PageEvent) {
    this.totalPag = e.length;
    this.regXPag = e.pageSize;
    this.nroPag = e.pageIndex + 1;
    this.listCustomers();
  } 

  constructor(
    private clienteService:ClienteService,
    private router:Router
  ) { }

  ngOnInit(): void {
    this.listCustomers();
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

  deleteEmployee(id:number){
    this.clienteService
    .delete(id)
    .subscribe(res=>{
      this.listCustomers();
    });
  }
}
