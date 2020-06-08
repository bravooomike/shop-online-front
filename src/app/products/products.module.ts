import { ProductTypeCodePipe } from "./../shared-module/pipes/product-type-code.pipe";
import { AppRoutingModule } from "./../app-routing.module";
import { RouterModule } from "@angular/router";
import { CartService } from "./../cart/cart.service";
import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { ProductsComponent } from "./products.component";
import { ListComponent } from "./list/list.component";
import { AddToCartComponent } from "./list/add-to-cart/add-to-cart.component";
import { CartModule } from "../cart/cart.module";
import { FilterComponent } from "./filter/filter.component";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { SharedModule } from "../shared-module/shared.module";
import { ProductsResolveService } from "./products-resolve.service";

@NgModule({
  declarations: [
    ProductsComponent,
    ListComponent,
    AddToCartComponent,
    FilterComponent,
  ],
  imports: [
    CommonModule,
    CartModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule,
    SharedModule,
    AppRoutingModule,
  ],
  exports: [ProductsComponent, ListComponent, FilterComponent],
  providers: [CartService, ProductsResolveService, ProductTypeCodePipe],
})
export class ProductsModule {}
