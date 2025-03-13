import { Injectable, WritableSignal, inject, signal } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { using } from "rxjs";

@Injectable({
  providedIn: "root",
})
export class ProductsService {
  constructor() {}

  httpClient = inject(HttpClient);

    cantidadCarrito: WritableSignal<number> = signal(0);

  getAllProducts() {
    return this.httpClient.get("http://localhost:3000/productos");
  }

  cambiarCantidad(cantidad: number) {
    this.cantidadCarrito.set(cantidad);
    console.log("cantidadCarrito", this.cantidadCarrito())
  }
}