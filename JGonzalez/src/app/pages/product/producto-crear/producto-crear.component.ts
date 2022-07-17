import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ProductService } from 'src/app/service/product.service';
import { Product } from '../../models/product.model';

@Component({
  selector: 'app-producto-crear',
  templateUrl: './producto-crear.component.html',
  styleUrls: ['./producto-crear.component.css']
})
export class ProductoCrearComponent implements OnInit {

  form!:FormGroup;  
  submited:boolean=false;

  constructor(
    private productService:ProductService,
    private router:Router,
    private formBuilder:FormBuilder
  ) { 
    this.form = formBuilder.group({
      id: ['', Validators.required],
      name: ['', Validators.required],
      price: ['', Validators.required]
    });
  }

  ngOnInit(): void {
  }

  addProduct(){
    const product:Product = {
      id:this.form.value.id,
      name:this.form.value.name,
      price:this.form.value.price
    }
    this.productService
    .add(product)
    .subscribe(res=>this.router.navigate(['/pages/productolistar']));
  }
}
