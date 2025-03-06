import { Routes } from '@angular/router';
import { HomeComponent } from './components/pages/home/home.component';
import { ProductsComponent } from './components/pages/products/products.component';
import { PageNotFoundComponent } from './components/pages/page-not-found/page-not-found.component';
import { HombreComponent } from './components/pages/hombre/hombre.component';
import { MujerComponent } from './components/pages/mujer/mujer.component';
import { NinoComponent } from './components/pages/nino/nino.component';
import { DescuentosComponent } from './components/pages/descuentos/descuentos.component';

export const routes: Routes = [
    { path: "inicio", title:"ZenRun", component: HomeComponent },
    { path: "productos", title:"Productos", component: ProductsComponent },
    { path: "hombre", title:"Hombre", component: HombreComponent },
    { path: "mujer", title:"Mujer", component: MujerComponent },
    { path: "nino", title:"Nino", component: NinoComponent },
    { path: "descuentos", title:"Descuentos", component: DescuentosComponent },
    { path: "", pathMatch: "full", redirectTo: "inicio" },
    { path: "**", title: "PageNotFound", component: PageNotFoundComponent },
];
