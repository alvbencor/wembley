import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProvinciaDetalleComponent } from './provincia-detalle.component';

describe('ProvinciaDetalleComponent', () => {
  let component: ProvinciaDetalleComponent;
  let fixture: ComponentFixture<ProvinciaDetalleComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ProvinciaDetalleComponent]
    });
    fixture = TestBed.createComponent(ProvinciaDetalleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
