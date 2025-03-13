import { Component, inject, Input, Signal } from '@angular/core';
import { RouterLink } from '@angular/router';
import { ProductsService } from '../../../services/products.services';

@Component({
  selector: 'app-navegation',
  imports: [RouterLink],
  templateUrl: './navegation.component.html',
  styleUrl: './navegation.component.css',
})
export class NavegationComponent {
 productService = inject(ProductsService);
  cantidad: Signal<number> = this.productService.cantidadCarrito;
}
