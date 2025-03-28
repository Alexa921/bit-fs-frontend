import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetalleDeProductoComponent } from './detalle-de-producto.component';

describe('DetalleDeProductoComponent', () => {
  let component: DetalleDeProductoComponent;
  let fixture: ComponentFixture<DetalleDeProductoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DetalleDeProductoComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DetalleDeProductoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
