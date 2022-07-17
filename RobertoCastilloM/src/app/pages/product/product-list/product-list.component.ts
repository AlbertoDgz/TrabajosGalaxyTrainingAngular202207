import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ProductService } from 'src/app/services/product.service';
import { Product } from '../../model/product.model';
import { PageEvent } from '@angular/material/paginator';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {

  products:Product[] = [];
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

    this.listProducts();
  }

  constructor(
    private productService:ProductService,
    private router:Router
  ) { }

  ngOnInit(): void {
    this.listProducts();
  }

  listProducts(){
    this.productService.list(this.nroPag, this.regXPag).subscribe(res=>{
      this.products = res.data,
      this.totalReg = res.totalReg,
      this.nroPag = res.pagActual,
      this.regXPag = res.regXPag

      if (this.totalReg % this.regXPag > 0)
      this.totalPag = Math.round(this.totalReg / this.regXPag) + 1;
    else this.totalPag = Math.round(this.totalReg / this.regXPag);

    });
  }

  deleteProducts(id:number){
    this.productService.borrar(id).subscribe(res=>{
      this.listProducts();
    });
  }

}
