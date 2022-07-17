import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http'
import { environment } from '../../environments/environment';
import { Observable } from 'rxjs';
import { Employee } from '../pages/model/employee.model';
import { EmployeePaginado } from '../pages/model/employee.paginado.model';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  urlAPI: string = environment.urlAPI;

  constructor(private http: HttpClient) { }

  getById(id: number): Observable<Employee> {
    const url: string = `${this.urlAPI}employee/get`;

    const httpParams = new HttpParams({
      fromObject: { id: id }
    });

    return this.http.get<Employee>(url, { params: httpParams });
  }

  list(nroPag: number, regXPag: number): Observable<EmployeePaginado> {
    const url: string = `${this.urlAPI}employee/list`;

    const httpParams = new HttpParams({
      fromObject: { nroPag: nroPag, regXPag: regXPag }
    });

    return this.http.get<EmployeePaginado>(url, { params: httpParams });
  }

  add(employee: Employee): Observable<Employee> {
    const url: string = `${this.urlAPI}employee/add`;

    return this.http.post<Employee>(url, employee);
  }

  update(employee: Employee): Observable<Employee> {
    const url: string = `${this.urlAPI}employee/update`;

    return this.http.put<Employee>(url, employee);
  }

  delete(id: number): Observable<Employee> {
    const url: string = `${this.urlAPI}employee/delete`;

    const httpParams = new HttpParams({
      fromObject: { id: id }
    });

    return this.http.delete<Employee>(url, { params: httpParams });
  }
}
