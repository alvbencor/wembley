import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter',
})
export class FilterPipe implements PipeTransform {
  transform(items: any[], searchText: string): any[] {
    if (!items || !searchText) {
      return items;
    }

    searchText = searchText.toLowerCase();

    return items.filter((item) =>
      item.NOMBRE_PROVINCIA.toLowerCase().startsWith(searchText)
    );
  }
}

@Component({
  selector: 'app-provincias',
  templateUrl: './provincias.component.html',
  styleUrls: ['./provincias.component.css'],
})
export class ProvinciasComponent implements OnInit {
  provincias: any[] = [];
  filtroProvincias: string = '';
  ordenAlfabetico: boolean = true;
  mostrarBotonOrden: boolean = true;

  constructor(private http: HttpClient) {}

  ngOnInit() {
    this.obtenerProvincias();
  }

  obtenerProvincias() {
    const url = 'https://www.el-tiempo.net/api/json/v2/provincias';
    this.http.get<any>(url).subscribe((data) => {
      this.provincias = data.provincias;
    });
  }

  eliminarProvincia(provincia: any) {
    const index = this.provincias.indexOf(provincia);
    if (index !== -1) {
      this.provincias.splice(index, 1);
    }
  }

  filtrarProvincias(provincia: any): boolean {
    return provincia.NOMBRE_PROVINCIA.toLowerCase().startsWith(
      this.filtroProvincias.toLowerCase()
    );
  }

  cambiarOrden() {
    this.ordenAlfabetico = !this.ordenAlfabetico;
    if (this.ordenAlfabetico) {
      this.provincias.sort((a, b) =>
        a.NOMBRE_PROVINCIA.localeCompare(b.NOMBRE_PROVINCIA)
      );
    } else {
      this.provincias.sort((a, b) =>
        b.NOMBRE_PROVINCIA.localeCompare(a.NOMBRE_PROVINCIA)
      );
    }
  }

  ocultarBoton() {
    this.mostrarBotonOrden = false;
  }

  mostrarBoton() {
    this.mostrarBotonOrden = true;
  }
}
