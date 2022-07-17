import { Injectable } from "@angular/core";
import { HttpClient, HttpParams} from '@angular/common/http';
import { Observable } from "rxjs";
import { Employees } from "../pages/models/employees.model";


@Injectable({
    providedIn:'root',
})
export class EmployeeService{

    URL:string = `http://localhost:5016/employees`;
    constructor(private http: HttpClient){}

    getEmployees():Observable<Employees[]>{
        return this.http.get<Employees[]>(this.URL + '/list');
    }

    postEmployees(employee: Employees):Observable<Employees> {     
        return this.http.post<Employees>(this.URL+ '/add', employee);
      }

    deleteEmployee(id: number) {
        return this.http.delete(this.URL+ '/delete?id='+ id);
    }

    getEmployee(id: number):Observable<Employees>{
        return this.http.get<Employees>(this.URL + '/get?id='+ id) ;
    }

    postUpdateEmployees(employee: Employees):Observable<Employees> {
        return this.http.put<Employees>(this.URL + '/update', employee);
    }

}