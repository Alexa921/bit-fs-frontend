import { Component, inject } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavegationComponent } from "./components/shared/navegation/navegation.component";
import { FooterComponent } from "./components/shared/footer/footer.component";
import { HeaderComponent } from './components/shared/header/header.component';
import { ProductsService } from './services/products.services';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, NavegationComponent, FooterComponent, HeaderComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {

}
