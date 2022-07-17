import { Component, OnInit } from '@angular/core';
import { Sale } from '../../model/sale.model';
import { SaleService } from '../../../services/sale.service';
import { Router } from '@angular/router';
import { PageEvent } from '@angular/material/paginator';

@Component({
  selector: 'app-sale-list',
  templateUrl: './sale-list.component.html',
  styleUrls: ['./sale-list.component.css']
})
export class SaleListComponent implements OnInit {

  sales: Sale[] = [];
  nroPag: number = 1;
  regXPag: number = 5;
  totalReg!: number;
  totalPag!: number;

  pageSizeOptions: number[] = [5, 10, 15, 20];
  pageEvent!: PageEvent;

  handlePages(e: PageEvent) {
    this.totalPag = e.length;
    this.regXPag = e.pageSize;
    this.nroPag = e.pageIndex + 1;

    this.listSales();
  }

  constructor(
    private saleService: SaleService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.listSales();
  }

  listSales() {
    this.saleService.list(this.nroPag, this.regXPag).subscribe(res => {
      this.sales = res.data,
      this.totalReg = res.totalReg,
      this.nroPag = res.pagActual,
      this.regXPag = res.regXPag

      this.totalPag = Math.round(this.totalReg / this.regXPag);

      if (this.totalReg % this.regXPag > 0) {
        this.totalPag++;
      }
    });
  }

  deleteSale(id: number) {
    this.saleService.delete(id).subscribe(res => {
      console.log(id);
      this.nroPag = 1;
      this.listSales();
    });
  }

}
