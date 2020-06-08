import { CartPosition } from "./../cart-position.model";
import { Component, OnInit } from "@angular/core";
import { CartService } from "./../cart.service";
import { OrderService } from "src/app/order/order.service";
import { OrderCreator } from "src/app/order/order.creator";

@Component({
  selector: "app-list",
  templateUrl: "./list.component.html",
  styleUrls: ["./list.component.scss"],
})
export class ListComponent implements OnInit {
  private cartPositions: CartPosition[] = [];
  private orderTotalValue: number = 0;
  private deliveryType: string = "odbi";
  private productQty: number;

  constructor(
    private cartService: CartService,
    private orderService: OrderService
  ) {}

  ngOnInit() {
    this.cartPositions = this.loadCartPositions();
    this.orderTotalValue = this.calculateOrderTotalValue();
  }

  private loadCartPositions() {
    return this.cartService.loadCartPositions();
  }

  private calculateOrderTotalValue(): number {
    if (this.cartPositions.length === 0) {
      return 0;
    }
    return this.cartPositions
      .map((el) => el.getQty() * el.getPrice())
      .reduce((prev, next) => prev + next);
  }

  public order(): void {
    if (this.cartPositions.length === 0 && this.orderTotalValue === 0) {
      alert("Brak produktów w koszyku!");
      return;
    }
    this.orderService
      .save(
        OrderCreator.fromCart(
          this.cartPositions,
          this.orderTotalValue,
          this.deliveryType
        )
      )
      .subscribe(() => {
        this.cartService.deleteAllFromLocalStorage();
        this.cartPositions = [];
        this.orderTotalValue = 0;
      });
  }

  private deleteFromCart(id: number) {
    this.cartService.deleteOneFromLocalStorage(id);
    this.cartPositions = this.loadCartPositions();
    this.orderTotalValue = this.calculateOrderTotalValue();
  }
}
