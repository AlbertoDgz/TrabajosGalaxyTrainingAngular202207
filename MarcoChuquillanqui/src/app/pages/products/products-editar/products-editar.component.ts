import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { CustomerService } from 'src/app/service/customer.service';
import { ProductsService } from 'src/app/service/products.service';
import { Customers } from '../../models/customers.model';
import { Products } from '../../models/products.model';

@Component({
  selector: 'app-products-editar',
  templateUrl: './products-editar.component.html',
  styleUrls: ['./products-editar.component.css']
})
export class ProductsEditarComponent implements OnInit {

  editProduct!: FormGroup;
  submited: boolean = false;
  
    constructor(
        private formBuilder : FormBuilder, 
        private productService: ProductsService, 
        private router: Router, 
        private activatedRoute: ActivatedRoute
        ) {
      this.editProduct = formBuilder.group({        
        codigo:['',Validators.required],
        nombre:['',Validators.required],
        precio:['',Validators.required],
      })
     }



  ngOnInit(): void {
    this.activatedRoute.params.subscribe(res=>{
      let id = res["id"];
      this.productService.getProduct(id).subscribe(res=>{
        this.editProduct.setValue({
          codigo: res.id,
          nombre: res.name,
          precio: res.price,
        });
      });

    });
  }

  editarProduct() {
    this.submited=true;
    if(this.editProduct.invalid) return;
    const product: Products={
      id : this.editProduct.value.codigo,      
      name: this.editProduct.value.nombre,
      price: this.editProduct.value.precio
    }

    this.productService.postUpdateProducts(product).subscribe(res=>this.router.navigate(['pages/productslistar']));
  }

}
