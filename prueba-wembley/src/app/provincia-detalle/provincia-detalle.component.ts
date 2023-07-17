import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-provincia-detalle',
  templateUrl: './provincia-detalle.component.html',
  styleUrls: ['./provincia-detalle.component.css']
})
export class ProvinciaDetalleComponent implements OnInit {
  nombreProvincia: string = '';

  constructor(private route: ActivatedRoute) {
    this.nombreProvincia = '';
  }

  ngOnInit() {
    this.nombreProvincia = this.route.snapshot.paramMap.get('nombre') ?? '';
  }
}
