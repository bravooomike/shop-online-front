import { OrderedProductService } from "./ordered-product.service";
import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { HttpClientModule } from "@angular/common/http";

@NgModule({
  declarations: [],
  imports: [CommonModule, HttpClientModule],
  providers: [OrderedProductService],
})
export class OrderedProductModule {}
