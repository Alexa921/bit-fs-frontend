import { Component, inject, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ProductsService } from '../../../services/products.services';

@Component({
  selector: 'app-descuentos',
  imports: [],
  templateUrl: './descuentos.component.html',
  styleUrl: './descuentos.component.css'
})
export class DescuentosComponent implements OnInit {
  productsService = inject(ProductsService);

  productos: any[] = [];
  carrito: any[] = [];

  ngOnInit() {
    this.obtenerTodosLosProductos();
  }

  obtenerTodosLosProductos() {
    this.productsService.getAllProducts().subscribe((respuesta: any) => {
      console.log('respuesta:', respuesta);
      this.productos = respuesta.data.filter(
        (producto: any) => producto.categoria === 'descuentos'
      );
    });
  }

  onClick(producto: any) {
    this.carrito.push(producto);
    this.productsService.cambiarCantidad(this.carrito.length);
  } 
}

