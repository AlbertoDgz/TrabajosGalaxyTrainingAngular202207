import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './external/login/login.component';
import { RegistrarComponent } from './external/registrar/registrar.component';
import { PageNotFountComponent } from './page-not-fount/page-not-fount.component';
import { PagesRoutingModule } from './pages/pages-routing.module';

const routes: Routes = [

  { path: 'login', component: LoginComponent },
  { path: 'registrar', component: RegistrarComponent },
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: '**', component: PageNotFountComponent },
];

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forRoot(routes),
    PagesRoutingModule
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
