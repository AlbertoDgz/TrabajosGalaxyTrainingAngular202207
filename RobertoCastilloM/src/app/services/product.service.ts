import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';
import { Product } from '../pages/model/product.model';
import { ProductPagina } from '../pages/model/product.pagina.model';


@Injectable({
  providedIn: 'root'
})
export class ProductService {

  urlApi:string = environment.urlApi;
  constructor(private http:HttpClient) { }

  getById(id:number):Observable<Product>{
    const url:string = `${this.urlApi}product/get`;
    const httpParams = new HttpParams({
      fromObject: {
        id:id
      }
    });
    return this.http.get<Product>(url, {params:httpParams});
  }

  list(nroPag:number, regXPag:number):Observable<ProductPagina>{
    const url:string = `${this.urlApi}product/list`;
    const httpParams = new HttpParams({
      fromObject: {
        nroPag:nroPag,
        regXPag:regXPag
      }
    });
    return this.http.get<ProductPagina>(url, {params:httpParams});
  }

  agregar(product:Product):Observable<Product>{
    const url:string = `${this.urlApi}product/add`;
    return this.http.post<Product>(url, product);
  }


  actualizar(product:Product):Observable<Product>{
    const url:string = `${this.urlApi}product/update`;
    return this.http.put<Product>(url, product);
  }

  borrar(id:number):Observable<Product>{
    const url:string = `${this.urlApi}product/delete`;
    const httpParams = new HttpParams({
      fromObject: {
        id:id
      }
    });
    return this.http.delete<Product>(url, {params:httpParams});
  }

}
