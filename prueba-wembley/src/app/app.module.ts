import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {
  ProvinciasComponent,
  FilterPipe,
} from './provincias/provincias.component';
import { ProvinciaDetalleComponent } from './provincia-detalle/provincia-detalle.component';

@NgModule({
  declarations: [
    AppComponent,
    ProvinciasComponent,
    ProvinciaDetalleComponent,
    FilterPipe,
  ],
  imports: [BrowserModule, HttpClientModule, FormsModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
