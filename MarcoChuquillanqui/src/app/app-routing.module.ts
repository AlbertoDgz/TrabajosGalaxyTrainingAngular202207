import { NgModule } from '@angular/core';
import { Router, RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './external/login/login.component';
import { RegistrarComponent } from './external/registrar/registrar.component';
import { PagesComponent } from './pages/pages.component';
import { PagesRoutingModule } from './pages/pages-routing.module';
import { HttpClientModule } from '@angular/common/http';

const routes: Routes=[
 
  { path:'login', component: LoginComponent},
  { path:'registrar', component: RegistrarComponent},
   { path:'login', component: LoginComponent},
  { path:'', redirectTo: '/login', pathMatch:'full'},
  
];

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forRoot(routes),
    PagesRoutingModule,
    HttpClientModule
  ], 
  exports:[
    RouterModule
  ]
})
export class AppRoutingModule { }
