import { Component, OnInit } from '@angular/core';
import { PageEvent } from '@angular/material/paginator';
import { Router } from '@angular/router';
import { ProductsService } from 'src/app/service/products.service';
import { Products } from '../../models/products.model';

@Component({
  selector: 'app-products-listar',
  templateUrl: './products-listar.component.html',
  styleUrls: ['./products-listar.component.css']
})
export class ProductsListarComponent implements OnInit {

  listarproducts: Products[] = [];

  constructor(private productService:ProductsService, private router: Router) { }

  ngOnInit(): void {   
    this.cargarRegistros();   
  }

  cargarRegistros(){
    this.productService.getProducts().subscribe(res=>{
      console.log('Retorno : '+ res);
        this.listarproducts = res;

    });    
  }

  onRemove(id: number){
    this.productService.deleteProduct(id).subscribe((response) => {
      this.cargarRegistros();
    })
  }

  onGet(id: number){
    this.productService.getProduct(id).subscribe((response) => {
      this.router.navigate(['/pages/productseditar'] , { queryParams: { Products: response } });
    })
  }
}
