import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Cliente } from '../pages/models/Customer.model';
import { ClientePaginado } from '../pages/models/Customer.paginado.model';

@Injectable({
  providedIn: 'root'
})
export class ClienteService {

  urlAPI: string = environment.urlAPI;

  constructor(private http: HttpClient) { }

  getById(id:number):Observable<Cliente>{
    const url:string = `${this.urlAPI}customer/get`;
    const httpParams = new HttpParams({
      fromObject:{
        id:id
      }
    });

    return this.http.get<Cliente>(url,{params:httpParams});
  }

  list(nroPag:number, regXPag:number):Observable<ClientePaginado>{
    const url:string = `${this.urlAPI}customer/list`;
    const httpParams = new HttpParams({
      fromObject:{
        nroPag:nroPag,
        regXPag:regXPag
      }
    });

    return this.http.get<ClientePaginado>(url,{params:httpParams});
  }

  add(cliente:Cliente):Observable<Cliente>{
    const url:string = `${this.urlAPI}customer/add`;
    
    return this.http.post<Cliente>(url,cliente);
  }

  update(cliente:Cliente):Observable<Cliente>{
    const url:string = `${this.urlAPI}customer/update`;
    
    return this.http.put<Cliente>(url,cliente);
  }

  delete(id:number):Observable<Cliente>{
    const url:string = `${this.urlAPI}customer/delete`;
    const httpParams = new HttpParams({
      fromObject:{
        id:id
      }
    });

    return this.http.delete<Cliente>(url,{params:httpParams});
  }
}
