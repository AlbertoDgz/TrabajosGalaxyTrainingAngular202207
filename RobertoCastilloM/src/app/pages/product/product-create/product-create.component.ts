import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ProductService } from 'src/app/services/product.service';
import { Product } from '../../model/product.model';

@Component({
  selector: 'app-product-create',
  templateUrl: './product-create.component.html',
  styleUrls: ['./product-create.component.css']
})
export class ProductCreateComponent implements OnInit {

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
    this.submited = true;
    const product:Product = {
      id: this.form.value.id,
      name: this.form.value.name,
      price: this.form.value.price
  }
  this.productService.agregar(product).subscribe(res=> this.router.navigate(['/pages/productlist']))

  }

}
