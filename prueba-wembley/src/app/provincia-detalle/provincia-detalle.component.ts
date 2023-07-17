import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-provincia-detalle',
  templateUrl: './provincia-detalle.component.html',
  styleUrls: ['./provincia-detalle.component.css']
})
export class ProvinciaDetalleComponent implements OnInit {
  codigoProvincia: string = '';
  nombreProvincia: string = '';
  today: string = '';
  tomorrow: string = '';
  ciudades: any[] = [];
  mostrarHoy: boolean = true;
  mostrarManana: boolean = false;
  fechaHoy: string = '';
  fechaManana: string = '';

  constructor(private route: ActivatedRoute, private http: HttpClient) {}

  ngOnInit() {
    const codigo = this.route.snapshot.paramMap.get('codigo');
    const nombre = this.route.snapshot.paramMap.get('nombre');
    
    if (codigo && nombre) {
      this.codigoProvincia = codigo;
      this.nombreProvincia = nombre;
      this.obtenerDatosProvincia();
    }

    const fechaActual = new Date();
    const opcionesFecha: Intl.DateTimeFormatOptions = { weekday: 'long', day: 'numeric', month: 'long' };
    this.fechaHoy = fechaActual.toLocaleDateString('es-ES', opcionesFecha);

    const fechaManana = new Date();
    fechaManana.setDate(fechaManana.getDate() + 1);
    this.fechaManana = fechaManana.toLocaleDateString('es-ES', opcionesFecha);
  }

  obtenerDatosProvincia() {
    const url = `https://www.el-tiempo.net/api/json/v2/provincias/${this.codigoProvincia}`;

    this.http.get<any>(url).subscribe(data => {
      this.today = data.today.p;
      this.tomorrow = data.tomorrow.p;
      this.ciudades = data.ciudades;
    });
  }

  mostrarHoyFunc() {
    this.mostrarHoy = true;
    this.mostrarManana = false;
  }
  
  mostrarMananaFunc() {
    this.mostrarHoy = false;
    this.mostrarManana = true;
  }
}
