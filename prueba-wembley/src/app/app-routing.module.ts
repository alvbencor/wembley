import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProvinciasComponent } from './provincias/provincias.component';
import { ProvinciaDetalleComponent } from './provincia-detalle/provincia-detalle.component';

const routes: Routes = [
  { path: '', component: ProvinciasComponent }, 
  { path: 'provincia/:codigo/:nombre', component: ProvinciaDetalleComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
