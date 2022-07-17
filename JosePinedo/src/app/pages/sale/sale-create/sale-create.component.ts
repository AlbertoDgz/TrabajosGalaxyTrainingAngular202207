import { Component, OnInit } from '@angular/core';
import { SaleService } from '../../../services/sale.service';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Sale } from '../../model/sale.model';

@Component({
  selector: 'app-sale-create',
  templateUrl: './sale-create.component.html',
  styleUrls: ['./sale-create.component.css']
})
export class SaleCreateComponent implements OnInit {

  form!: FormGroup;
  submited: boolean = false;

  constructor(
    private saleService: SaleService,
    private router: Router,
    private formBuilder: FormBuilder
  ) {
    this.form = formBuilder.group({
      id: ['', Validators.required],
      date: ['', Validators.required],
      unitPrice: ['', Validators.required],
      quantity: ['', Validators.required],
      totalPrice: ['', Validators.required]
    });
  }

  ngOnInit(): void {
  }

  addSale() {
    this.submited = true;

    const sale: Sale = {
      id: this.form.value.id,
      date: this.form.value.date,
      unitPrice: this.form.value.unitPrice,
      quantity: this.form.value.quantity,
      totalPrice: this.form.value.totalPrice,
      customer_Id: 1,
      employee_Id: 1,
      product_Id: 1
    }

    this.saleService.add(sale).subscribe(res => this.router.navigate(['/pages/salelist']));
  }

}
