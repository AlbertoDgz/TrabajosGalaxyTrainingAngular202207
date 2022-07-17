import { Component, OnInit } from '@angular/core';
import { PageEvent } from '@angular/material/paginator';
import { Router } from '@angular/router';
import { ProductService } from 'src/app/service/product.service';
import { Product } from '../../models/product.model';

@Component({
  selector: 'app-producto-listar',
  templateUrl: './producto-listar.component.html',
  styleUrls: ['./producto-listar.component.css']
})
export class ProductoListarComponent implements OnInit {
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
    this.productService
    .list(this.nroPag, this.regXPag)
    .subscribe(res=>{
      this.products=res.data,
      this.totalReg=res.totalReg
      this.nroPag=res.pagActual,
      this.regXPag=res.regXPag

      if (this.totalReg % this.regXPag > 0)
        this.totalPag = Math.round(this.totalReg / this.regXPag) + 1;
      else this.totalPag = Math.round(this.totalReg / this.regXPag);

      
    });
  }

  deleteProduct(id:number){
    this.productService
    .delete(id)
    .subscribe(res=>{
      this.listProducts();
    });
  }
}
