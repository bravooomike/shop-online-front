import { NgModule } from "@angular/core";
import { RouterModule, Route } from "@angular/router";
import { ListComponent } from "./../cart/list/list.component";
import { ProductsResolveService } from "./products-resolve.service";
import { LoginComponent } from "../shared-module/login/login.component";

const PRODUCTS_ROUTES: Route[] = [
  { path: "cart", component: ListComponent },
  { path: "login", component: LoginComponent },
];

@NgModule({
  imports: [RouterModule.forChild(PRODUCTS_ROUTES)],
  exports: [RouterModule],
})
export class ProductsRoutingModule {}
