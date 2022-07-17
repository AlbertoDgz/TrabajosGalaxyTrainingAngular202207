import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Sales } from '../pages/model/sales.model';
import { SalesPaginado } from '../pages/model/sales.paginado.model';

@Injectable({
  providedIn: 'root'
})
export class SalesService {

  urlAPI: string = environment.urlApi;

  constructor(private http: HttpClient) { }

  getById(id:number):Observable<Sales>{
    const url:string = `${this.urlAPI}sales/get`;
    const httpParams = new HttpParams({
      fromObject:{
        id:id
      }
    });

    return this.http.get<Sales>(url,{params:httpParams});
  }

  list(nroPag:number, regXPag:number):Observable<SalesPaginado>{
    const url:string = `${this.urlAPI}sales/list`;
    const httpParams = new HttpParams({
      fromObject:{
        nroPag:nroPag,
        regXPag:regXPag
      }
    });

    return this.http.get<SalesPaginado>(url,{params:httpParams});
  }

  add(sales:Sales):Observable<Sales>{
    const url:string = `${this.urlAPI}sales/add`;

    return this.http.post<Sales>(url,sales);
  }

  update(sales:Sales):Observable<Sales>{
    const url:string = `${this.urlAPI}sales/update`;

    return this.http.put<Sales>(url,sales);
  }

  delete(id:number):Observable<Sales>{
    const url:string = `${this.urlAPI}sales/delete`;
    const httpParams = new HttpParams({
      fromObject:{
        id:id
      }
    });

    return this.http.delete<Sales>(url,{params:httpParams});
  }
}
