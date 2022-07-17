import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http'
import { environment } from '../../environments/environment';
import { Observable } from 'rxjs';
import { Sale } from '../pages/model/sale.model';
import { SalePaginado } from '../pages/model/sale.paginado.model';

@Injectable({
  providedIn: 'root'
})
export class SaleService {

  urlAPI: string = environment.urlAPI;

  constructor(private http: HttpClient) { }

  getById(id: number): Observable<Sale> {
    const url: string = `${this.urlAPI}sales/get`;

    const httpParams = new HttpParams({
      fromObject: { id: id }
    });

    return this.http.get<Sale>(url, { params: httpParams });
  }

  list(nroPag: number, regXPag: number): Observable<SalePaginado> {
    const url: string = `${this.urlAPI}sales/list`;

    const httpParams = new HttpParams({
      fromObject: { nroPag: nroPag, regXPag: regXPag }
    });

    return this.http.get<SalePaginado>(url, { params: httpParams });
  }

  add(sale: Sale): Observable<Sale> {
    const url: string = `${this.urlAPI}sales/add`;

    return this.http.post<Sale>(url, sale);
  }

  update(sale: Sale): Observable<Sale> {
    const url: string = `${this.urlAPI}sales/update`;

    return this.http.put<Sale>(url, sale);
  }

  delete(id: number): Observable<Sale> {
    const url: string = `${this.urlAPI}sales/delete`;

    const httpParams = new HttpParams({
      fromObject: { id: id }
    });

    return this.http.delete<Sale>(url, { params: httpParams });
  }
}
