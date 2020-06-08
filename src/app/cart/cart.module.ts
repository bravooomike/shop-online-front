import { FormsModule } from "@angular/forms";
import { OrderModule } from "./../order/order.module";
import { RouterModule } from "@angular/router";
import { CartService } from "./cart.service";
import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { ListComponent } from "./list/list.component";
import { SharedModule } from "../shared-module/shared.module";

@NgModule({
  declarations: [ListComponent],
  imports: [CommonModule, RouterModule, OrderModule, FormsModule, SharedModule],
  providers: [CartService],
})
export class CartModule {}
