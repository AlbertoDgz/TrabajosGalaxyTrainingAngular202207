import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductService } from 'src/app/service/product.service';
import { Product } from '../../models/product.model';

@Component({
  selector: 'app-producto-editar',
  templateUrl: './producto-editar.component.html',
  styleUrls: ['./producto-editar.component.css']
})
export class ProductoEditarComponent implements OnInit {

  form!:FormGroup;  
  submited:boolean=false;

  constructor(
    private productService:ProductService,
    private router:Router,
    private formBuilder:FormBuilder,
    private activatedRoute: ActivatedRoute
  ) {
    this.form = formBuilder.group({
      id: ['', Validators.required],
      name: ['', Validators.required],
      price: ['', Validators.required]
    });
   }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(res=>{
      let id = res["id"];
      this.productService.getById(id).subscribe(res=>{
        this.form.setValue({
          id:res.id,
          name:res.name,
          price:res.price
        });
      });

    });
  }

  updateProduct(){
    const product:Product = {
      id:this.form.value.id,
      name:this.form.value.name,
      price:this.form.value.price
    }
    this.productService
    .update(product)
    .subscribe(res=>this.router.navigate(['/pages/productolistar']));
  }
}
