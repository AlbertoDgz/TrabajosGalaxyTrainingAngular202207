import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ProductsService } from 'src/app/service/products.service';
import { Products } from '../../models/products.model';

@Component({
  selector: 'app-products-crear',
  templateUrl: './products-crear.component.html',
  styleUrls: ['./products-crear.component.css']
})
export class ProductsCrearComponent implements OnInit {

  [x: string]: any;

  createProduct!: FormGroup;
  submited: boolean = false;
  
    constructor(private formBuilder : FormBuilder, private productService: ProductsService, private router: Router) {
      this.createProduct = formBuilder.group({
        nombre:['',Validators.required],
        precio:['',Validators.required],
      })
     }
  
    ngOnInit(): void {
  
    }
    agregarProduct() {
      this.submited=true;
      if(this.createProduct.invalid) return;
      const product: Products={
        id : this.createProduct.value.id,
        name: this.createProduct.value.nombre,
        price: this.createProduct.value.precio
      }
      this.productService.postProducts(product).subscribe(res=>this.router.navigate(['pages/productslistar']));
    }
}
