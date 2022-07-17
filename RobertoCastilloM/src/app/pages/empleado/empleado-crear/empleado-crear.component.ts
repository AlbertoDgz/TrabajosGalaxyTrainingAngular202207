import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { EmpleadoService } from 'src/app/services/empleado.service';
import { Empleado } from '../../model/Employees.model';

@Component({
  selector: 'app-empleado-crear',
  templateUrl: './empleado-crear.component.html',
  styleUrls: ['./empleado-crear.component.css']
})
export class EmpleadoCrearComponent implements OnInit {

  form!:FormGroup;
  submited:boolean=false;

  constructor(
    private empleadoService:EmpleadoService,
    private router:Router,
    private formBuilder:FormBuilder
  ) {
    this.form = formBuilder.group({
      id: ['', Validators.required],
      name: ['', Validators.required]
    });
   }

  ngOnInit(): void {
  }

  addEmployee(){
    const employee:Empleado = {
      id:this.form.value.id,
      name:this.form.value.name,
    }
    this.empleadoService
    .add(employee)
    .subscribe(res=>this.router.navigate(['/pages/empleadolistar']));
  }
}
