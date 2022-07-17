import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { EmployeeService } from 'src/app/service/employee.service';
import { Employees } from '../../models/employees.model';

@Component({
  selector: 'app-employees-listar',
  templateUrl: './employees-listar.component.html',
  styleUrls: ['./employees-listar.component.css']
})
export class EmployeesListarComponent implements OnInit {

  listaremployees: Employees[] = [];


  constructor(private employeeService:EmployeeService, private router: Router) { }

  ngOnInit(): void {   
    this.cargarRegistros();   
  }

  cargarRegistros(){
    this.employeeService.getEmployees().subscribe(res=>{
      console.log('Retorno : '+ res);
        this.listaremployees = res;

    });    
  }

  onRemove(id: number){
    this.employeeService.deleteEmployee(id).subscribe((response) => {
      this.cargarRegistros();
    })
  }

  onGet(id: number){
    this.employeeService.getEmployee(id).subscribe((response) => {
      this.router.navigate(['/pages/employeeeditar'] , { queryParams: { Employees: response } });
    })
  }

}
