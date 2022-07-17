import { Component, OnInit } from '@angular/core';
import { PageEvent } from '@angular/material/paginator';
import { Router } from '@angular/router';
import { SalesService } from 'src/app/services/sales.service';
import { Sales } from '../../model/sales.model';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-sales-listar',
  templateUrl: './sales-listar.component.html',
  styleUrls: ['./sales-listar.component.css']
})
export class SalesListarComponent implements OnInit {

  ventas:Sales[] = [];

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
    this.listVentas();
  }

  constructor(
    private salesService:SalesService,
    private router:Router
  ) { }

  ngOnInit(): void {
    this.listVentas();
  }

  listVentas(){
    let pipe = new DatePipe('en-US');
    this.salesService
    .list(this.nroPag, this.regXPag)
    .subscribe(res=>{
      this.ventas=res.data,
      this.totalReg=res.totalReg
      this.nroPag=res.pagActual,
      this.regXPag=res.regXPag

      if (this.totalReg % this.regXPag > 0)
        this.totalPag = Math.round(this.totalReg / this.regXPag) + 1;
      else this.totalPag = Math.round(this.totalReg / this.regXPag);
    });
  }

  deleteVentas(id:number){
    this.salesService
    .delete(id)
    .subscribe(res=>{
      this.listVentas();
    });
  }
}
