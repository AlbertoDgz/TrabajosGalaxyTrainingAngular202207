import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PagesComponent } from './pages.component';
import { ProductoCrearComponent } from './product/producto-crear/producto-crear.component';
import { ProductoListarComponent } from './product/producto-listar/producto-listar.component';
import { ProductoEditarComponent } from './product/producto-editar/producto-editar.component';
import { EmpleadoListarComponent } from './employee/empleado-listar/empleado-listar.component';
import { EmpleadoEditarComponent } from './employee/empleado-editar/empleado-editar.component';
import { EmpleadoCrearComponent } from './employee/empleado-crear/empleado-crear.component';
import { ClienteListarComponent } from './customer/cliente-listar/cliente-listar.component';
import { ClienteEditarComponent } from './customer/cliente-editar/cliente-editar.component';
import { ClienteCrearComponent } from './customer/cliente-crear/cliente-crear.component';
import { SalesListarComponent } from './sales/sales-listar/sales-listar.component';
import { SalesEditarComponent } from './sales/sales-editar/sales-editar.component';
import { SalesCrearComponent } from './sales/sales-crear/sales-crear.component';

const routes: Routes = [
  {
    path: 'pages',
    component: PagesComponent,
    children: [
      { path: 'productolistar', component: ProductoListarComponent },
      { path: 'productoeditar/:id', component: ProductoEditarComponent },
      { path: 'productocrear', component: ProductoCrearComponent },
      { path: 'empleadolistar', component: EmpleadoListarComponent },
      { path: 'empleadoeditar/:id', component: EmpleadoEditarComponent },
      { path: 'empleadocrear', component: EmpleadoCrearComponent },
      { path: 'clientelistar', component: ClienteListarComponent },
      { path: 'clienteeditar/:id', component: ClienteEditarComponent },
      { path: 'clientecrear', component: ClienteCrearComponent },
      { path: 'ventaslistar', component: SalesListarComponent },
      { path: 'ventaseditar/:id', component: SalesEditarComponent },
      { path: 'ventascrear', component: SalesCrearComponent },
      { path: '', redirectTo: 'productolistar', pathMatch: 'full' },
    ],
  },
];

@NgModule({
  declarations: [],
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PagesRoutingModule {}
