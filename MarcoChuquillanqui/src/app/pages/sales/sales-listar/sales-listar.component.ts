import { Component, OnInit, ViewChild } from '@angular/core';
import { PageEvent } from '@angular/material/paginator';
import { Router } from '@angular/router';
import { SalesService } from 'src/app/service/sales.service';
import { Sales } from '../../models/sales.model';


@Component({
  selector: 'app-sales-listar',
  templateUrl: './sales-listar.component.html',
  styleUrls: ['./sales-listar.component.css']
})
export class SalesListarComponent implements OnInit {

  listarsales: Sales[] = [];
  nroPag: number = 1;
  regXPag: number= 5;
  totalReg!: number;
  totalPag!: number;

  pageSizeOptions: number[] = [5, 10, 15, 20];
  pageEvent!: PageEvent;


  handlePages(e: PageEvent) {
    this.totalPag = e.length;
    this.regXPag = e.pageSize;
    this.nroPag = e.pageIndex + 1;

    this.cargarRegistrosPaginados();
  }

  constructor(private salesService:SalesService, private router: Router) { }

  ngOnInit(): void {   
    this.cargarRegistrosPaginados();  
    
  }

  cargarRegistros(){
    this.salesService.getSales().subscribe(res=>{
        this.listarsales = res;
    });    
  }

  cargarRegistrosPaginados(){
      this.salesService.list(this.nroPag, this.regXPag).subscribe(res => {
        console.log(res);
        this.listarsales = res.data,
          this.totalReg = res.totalReg,
          this.nroPag = res.pagActual,
          this.regXPag = res.regXPag
  
          if (this.totalReg % this.regXPag > 0)
          this.totalPag = Math.round(this.totalReg / this.regXPag) + 1;
        else this.totalPag = Math.round(this.totalReg / this.regXPag);
  
      });

  }


}
