import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { LoginService } from '../../service/login.service';
import { Router } from '@angular/router';
import { Login } from 'src/app/pages/models/login.model';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  loginAutenticacion!: FormGroup;
  submited: boolean = false;

  constructor(
    private formBuilder: FormBuilder,
    private loginService: LoginService,
    private router: Router
  ) {
    this.loginAutenticacion = this.formBuilder.group({
      usuario: ['', Validators.required],
      clave: ['', Validators.required],
    });
  }

  ngOnInit(): void {}
  autenticarUsuario() {
    console.log('ingreso a autenticarUsuario');
    this.submited = true;
    if (this.loginAutenticacion.invalid) return;
    const login: Login = {
      codUsuario: this.loginAutenticacion.value.codUsuario,
      clave: this.loginAutenticacion.value.clave,
    };
    this.loginService
      .postAutenticate(login)
      .subscribe(res => this.router.navigate(['/pages/articulolistar']));
  }
}
