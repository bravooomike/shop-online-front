import { NgModule } from "@angular/core";
import { RouterModule, Route } from "@angular/router";
import { ProductsComponent } from "./products/products.component";
import { ProductsResolveService } from "./products/products-resolve.service";

const APP_ROUTES: Route[] = [
  {
    path: "",
    pathMatch: "full",
    redirectTo: "products",
  },
  {
    path: "products",
    component: ProductsComponent,
    resolve: { products: ProductsResolveService },
  },
];

@NgModule({
  imports: [RouterModule.forRoot(APP_ROUTES)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
