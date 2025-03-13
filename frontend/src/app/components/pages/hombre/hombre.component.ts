import { Component, inject, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ProductsService } from '../../../services/products.services';
import { Product } from '../../../interfaces/products';

@Component({
  selector: 'app-hombre',
  imports: [],
  templateUrl: './hombre.component.html',
  styleUrl: './hombre.component.css'
})
export class HombreComponent implements OnInit {
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
        (producto: any) => producto.categoria === 'hombre'
      );
    });
  }

  onClick(producto: any) {
    this.carrito.push(producto);
    this.productsService.cambiarCantidad(this.carrito.length);
  } 
}
