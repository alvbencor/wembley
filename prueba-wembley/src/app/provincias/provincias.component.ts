import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-provincias',
  templateUrl: './provincias.component.html',
  styleUrls: ['./provincias.component.css']
})
export class ProvinciasComponent implements OnInit{
  provincias: any[] = [];

  constructor(private http: HttpClient) { }

  ngOnInit() {
    this.obtenerProvincias();
  }

  obtenerProvincias() {
    const url = 'https://www.el-tiempo.net/api/json/v2/provincias';
    this.http.get<any>(url).subscribe(data => {
      this.provincias = data.provincias;
    });
  }

  eliminarProvincia(provincia: any) {
  const index = this.provincias.indexOf(provincia);
  if (index !== -1) {
    this.provincias.splice(index, 1);
  }
}

}
