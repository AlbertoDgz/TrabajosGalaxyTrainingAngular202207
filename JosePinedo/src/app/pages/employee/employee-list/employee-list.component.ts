import { Component, OnInit } from '@angular/core';
import { Employee } from '../../model/employee.model';
import { EmployeeService } from '../../../services/employee.service';
import { Router } from '@angular/router';
import { PageEvent } from '@angular/material/paginator';

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.css']
})
export class EmployeeListComponent implements OnInit {

  employees: Employee[] = [];
  nroPag: number = 1;
  regXPag: number = 5;
  totalReg!: number;
  totalPag!: number;

  pageSizeOptions: number[] = [5, 10, 15, 20];
  pageEvent!: PageEvent;

  handlePages(e: PageEvent) {
    this.totalPag = e.length;
    this.regXPag = e.pageSize;
    this.nroPag = e.pageIndex + 1;

    this.listEmployees();
  }

  constructor(
    private employeeService: EmployeeService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.listEmployees();
  }

  listEmployees() {
    this.employeeService.list(this.nroPag, this.regXPag).subscribe(res => {
      this.employees = res.data,
      this.totalReg = res.totalReg,
      this.nroPag = res.pagActual,
      this.regXPag = res.regXPag

      this.totalPag = Math.round(this.totalReg / this.regXPag);

      if (this.totalReg % this.regXPag > 0) {
        this.totalPag++;
      }
    });
  }

  deleteEmployee(id: number) {
    this.employeeService.delete(id).subscribe(res => {
      console.log(id);
      this.nroPag = 1;
      this.listEmployees();
    });
  }

}
