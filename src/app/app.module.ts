import { OrderedProductService } from "./ordered-product/ordered-product.service";
import { RouterModule } from "@angular/router";
import { ProductsModule } from "./products/products.module";
import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppComponent } from "./app.component";
import { ProductsService } from "./products/products.service";
import { HttpClientModule } from "@angular/common/http";
import { AppRoutingModule } from "./app-routing.module";
import { ProductsRoutingModule } from "./products/products-routing.module";
import { CartRoutingModule } from "./cart/cart-routing.module";
import { ProductsResolveService } from "./products/products-resolve.service";

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    ProductsModule,
    HttpClientModule,
    AppRoutingModule,
    ProductsRoutingModule,
    CartRoutingModule,
    RouterModule,
  ],
  providers: [ProductsService, ProductsResolveService, OrderedProductService],
  bootstrap: [AppComponent],
})
export class AppModule {}
