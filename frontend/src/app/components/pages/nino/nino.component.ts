import { Component, inject, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ProductsService } from '../../../services/products.services';
import { Product } from '../../../interfaces/products';

@Component({
  selector: 'app-nino',
  imports: [],
  templateUrl: './nino.component.html',
  styleUrl: './nino.component.css'
})
export class NinoComponent implements OnInit {
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
        (producto: any) => producto.categoria === 'niño'
      );
    });
  }

  onClick(producto: any) {
    this.carrito.push(producto);
    this.productsService.cambiarCantidad(this.carrito.length);
  } 
}
