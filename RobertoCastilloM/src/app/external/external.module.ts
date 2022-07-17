import { NgModule } from '@angular/core';
import { LoginComponent } from './login/login.component';
import { RegistrarComponent } from './registrar/registrar.component';
import { ExternalRoutingModule } from './external-routing.module';
import { CommonModule } from '@angular/common';



@NgModule({
  declarations: [
    LoginComponent,
    RegistrarComponent],
  imports: [
    ExternalRoutingModule, CommonModule
  ]
})
export class ExternalModule { }
