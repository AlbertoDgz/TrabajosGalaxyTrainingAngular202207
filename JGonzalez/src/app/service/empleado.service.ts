import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Empleado } from '../pages/models/Employees.model';
import { EmpleadoPaginado } from '../pages/models/Employees.paginado.model';

@Injectable({
  providedIn: 'root'
})
export class EmpleadoService {

  urlAPI: string = environment.urlAPI;

  constructor(private http: HttpClient) { }

  getById(id:number):Observable<Empleado>{
    const url:string = `${this.urlAPI}employee/get`;
    const httpParams = new HttpParams({
      fromObject:{
        id:id
      }
    });

    return this.http.get<Empleado>(url,{params:httpParams});
  }

  list(nroPag:number, regXPag:number):Observable<EmpleadoPaginado>{
    const url:string = `${this.urlAPI}employee/list`;
    const httpParams = new HttpParams({
      fromObject:{
        nroPag:nroPag,
        regXPag:regXPag
      }
    });

    return this.http.get<EmpleadoPaginado>(url,{params:httpParams});
  }

  add(empleado:Empleado):Observable<Empleado>{
    const url:string = `${this.urlAPI}employee/add`;
    
    return this.http.post<Empleado>(url,empleado);
  }

  update(empleado:Empleado):Observable<Empleado>{
    const url:string = `${this.urlAPI}employee/update`;
    
    return this.http.put<Empleado>(url,empleado);
  }

  delete(id:number):Observable<Empleado>{
    const url:string = `${this.urlAPI}employee/delete`;
    const httpParams = new HttpParams({
      fromObject:{
        id:id
      }
    });

    return this.http.delete<Empleado>(url,{params:httpParams});
  }
}
