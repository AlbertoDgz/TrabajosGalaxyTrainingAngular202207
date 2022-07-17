import { Component, OnInit } from '@angular/core';
import { PageEvent } from '@angular/material/paginator';
import { Router } from '@angular/router';
import { EmpleadoService } from 'src/app/services/empleado.service';
import { Empleado } from '../../model/Employees.model';

@Component({
  selector: 'app-empleado-listar',
  templateUrl: './empleado-listar.component.html',
  styleUrls: ['./empleado-listar.component.css']
})
export class EmpleadoListarComponent implements OnInit {

  employees:Empleado[] = [];

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
    this.listEmployees();
  }

  constructor(
    private empleadoService:EmpleadoService,
    private router:Router
  ) { }

  ngOnInit(): void {
    this.listEmployees();
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

  deleteEmployee(id:number){
    this.empleadoService
    .delete(id)
    .subscribe(res=>{
      this.listEmployees();
    });
  }
}
