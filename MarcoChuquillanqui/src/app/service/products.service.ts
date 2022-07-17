import { Injectable } from "@angular/core";
import { HttpClient, HttpParams} from '@angular/common/http';
import { Observable } from "rxjs";
import { Products } from "../pages/models/products.model";


@Injectable({
    providedIn:'root',
})
export class ProductsService{

    URL:string = `http://localhost:5016/products`;
    constructor(private http: HttpClient){}

    getProducts():Observable<Products[]>{
        return this.http.get<Products[]>(this.URL + '/list');
    }

    postProducts(product: Products):Observable<Products> {       
        return this.http.post<Products>(this.URL+ '/add', product);
    }

    postUpdateProducts(product: Products):Observable<Products> {
        return this.http.put<Products>(this.URL + '/update', product);
    }


    deleteProduct(id: number) {
        return this.http.delete(this.URL+ '/delete?id='+ id);
    }

    getProduct(id: number):Observable<Products>{
        return this.http.get<Products>(this.URL + '/get?id='+ id) ;
    }
}