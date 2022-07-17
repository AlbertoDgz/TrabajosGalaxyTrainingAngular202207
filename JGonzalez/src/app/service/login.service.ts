import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Login } from '../pages/models/login.model';
import { LoginResult } from '../pages/models/login-result.model';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  URL: string = 'http://localhost:5266/articulo/';

  constructor(private http: HttpClient) {}

  postAutenticate(login: Login):Observable<LoginResult>{
    return this.http.post<LoginResult>(this.URL,login)
  }
}
