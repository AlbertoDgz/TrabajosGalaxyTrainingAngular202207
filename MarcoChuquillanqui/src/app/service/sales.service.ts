import { Injectable } from "@angular/core";
import { HttpClient, HttpParams} from '@angular/common/http';
import { Observable } from "rxjs";
import { Sales } from "../pages/models/sales.model";
import { SalesPaginado } from "../pages/models/sales.paginado.model";


@Injectable({
    providedIn:'root',
})
export class SalesService{

    URL:string = `http://localhost:5016/sales`;
    constructor(private http: HttpClient){}

    getSales():Observable<Sales[]>{
        return this.http.get<Sales[]>(this.URL + '/list');
    }

    postSales(sale: Sales):Observable<Sales> {
        return this.http.post<Sales>(this.URL+ '/add', sale);
      }

      list(nroPag: number, regXPag: number): Observable<SalesPaginado> {
        const httpParams = new HttpParams({
          fromObject: {
            nroPag: nroPag,
            regXPag: regXPag
          }
        });
    
        console.log('nroPag' + nroPag);
        console.log('regXPag' + regXPag);
        return this.http.get<SalesPaginado>(this.URL+'/listPage', { params: httpParams });
      }
}