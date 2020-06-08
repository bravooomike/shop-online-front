import { Product } from "./../../model/product.model";
import { CartService } from "./../../../cart/cart.service";
import { Component, OnInit, Input } from "@angular/core";

@Component({
  selector: "app-add-to-cart",
  templateUrl: "./add-to-cart.component.html",
  styleUrls: ["./add-to-cart.component.scss"],
})
export class AddToCartComponent implements OnInit {
  @Input() private product: Product;
  // @Input() private id: number;
  private qty: number = 0;
  public productQty: number = 0;

  constructor(private cartService: CartService) {}

  ngOnInit() {
    this.getCountedProducts();
  }

  private subtract(): void {
    if (this.qty <= 0) {
      return;
    }
    this.qty--;
  }

  private add(): void {
    this.qty++;
  }

  private addToCart(): void {
    if (this.qty === 0) {
      return;
    }
    this.cartService.addPositionToCart(this.product, this.qty);
    this.getCountedProducts();
    this.qty = 0;
  }

  private getCountedProducts(): void {
    this.productQty = this.cartService.countProducts(this.product.id);
  }

  private onChangeValue(e) {
    const value = +e.target.value;
    // console.log(value);
    // console.log(this.product.id);
    this.cartService.changeQty(this.product, value);
  }
}
