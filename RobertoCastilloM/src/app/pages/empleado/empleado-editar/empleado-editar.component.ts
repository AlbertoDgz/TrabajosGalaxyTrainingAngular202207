import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { EmpleadoService } from 'src/app/services/empleado.service';
import { Empleado } from '../../model/Employees.model';

@Component({
  selector: 'app-empleado-editar',
  templateUrl: './empleado-editar.component.html',
  styleUrls: ['./empleado-editar.component.css']
})
export class EmpleadoEditarComponent implements OnInit {

  form!:FormGroup;
  submited:boolean=false;

  constructor(
    private empleadoService:EmpleadoService,
    private router:Router,
    private formBuilder:FormBuilder,
    private activatedRoute: ActivatedRoute
  ) {
    this.form = formBuilder.group({
      id: ['', Validators.required],
      name: ['', Validators.required]
    });
  }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(res=>{
      let id = res["id"];
      this.empleadoService.getById(id).subscribe(res=>{
        this.form.setValue({
          id:res.id,
          name:res.name
        });
      });
    });
  }

  updateEmployee(){
    const empleado:Empleado = {
      id:this.form.value.id,
      name:this.form.value.name
    }
    this.empleadoService
    .update(empleado)
    .subscribe(res=>this.router.navigate(['/pages/empleadolistar']));
  }
}
