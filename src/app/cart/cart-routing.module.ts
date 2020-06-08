import { NgModule } from "@angular/core";
import { RouterModule, Route } from "@angular/router";
import { ListComponent } from "./../products/list/list.component";

const CART_ROUTES: Route[] = [{ path: "products", component: ListComponent }];

@NgModule({
  imports: [RouterModule.forChild(CART_ROUTES)],
  exports: [RouterModule],
})
export class CartRoutingModule {}
