import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { SaleService } from 'src/app/services/sale.service';
import { Sale } from '../../model/sale.model';

@Component({
  selector: 'app-sale-edit',
  templateUrl: './sale-edit.component.html',
  styleUrls: ['./sale-edit.component.css']
})
export class SaleEditComponent implements OnInit {
  form!: FormGroup;
  submited: boolean = false;

  constructor(
    private saleService: SaleService,
    private router: Router,
    private formBuilder: FormBuilder,
    private activatedRoute: ActivatedRoute
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
    this.activatedRoute.params.subscribe(res => {
      let id = res["id"];

      this.saleService.getById(id).subscribe(res => {
        this.form.setValue({
          id: res.id,
          date: res.date,
          unitPrice: res.unitPrice,
          quantity: res.quantity,
          totalPrice: res.totalPrice
        });
      });
    });
  }

  updateSale() {
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

    this.saleService.update(sale).subscribe(res => this.router.navigate(['/pages/salelist']));
  }

}
