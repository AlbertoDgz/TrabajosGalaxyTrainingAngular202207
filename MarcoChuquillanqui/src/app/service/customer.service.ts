import { Injectable } from "@angular/core";
import { HttpClient, HttpParams} from '@angular/common/http';
import { Observable } from "rxjs";
import { Customers } from "../pages/models/customers.model";


@Injectable({
    providedIn:'root',
})
export class CustomerService{

    URL:string = `http://localhost:5016/customers`;
    constructor(private http: HttpClient){}

    getCustomers():Observable<Customers[]>{
        return this.http.get<Customers[]>(this.URL + '/list') ;
    }

    postInsertCustomers(customer: Customers):Observable<Customers> {
        return this.http.post<Customers>(this.URL + '/add', customer);
    }
    
    postUpdateCustomers(customer: Customers):Observable<Customers> {
        return this.http.put<Customers>(this.URL + '/update', customer);
    }

    deleteCustomer(id: number) {
        return this.http.delete(this.URL+ '/delete?id='+ id);
    }

    getCustomer(id: number):Observable<Customers>{
        return this.http.get<Customers>(this.URL + '/get?id='+ id) ;
    }
}