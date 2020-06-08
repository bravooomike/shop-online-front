import { Product } from "./../products/model/product.model";
import { Injectable } from "@angular/core";
import { CartPosition } from "./cart-position.model";

@Injectable({
  providedIn: "root",
})
export class CartService {
  private cartPositions: CartPosition[] = [];

  constructor() {
    this.cartPositions = this.getPositionsFromLocalStorage();
  }

  public addPositionToCart(product: Product, qty: number): void {
    const cartPosition: CartPosition = this.cartPositions.find(
      (item) => item.getId() === product.id
    );
    if (cartPosition) {
      let previousQty = cartPosition.getQty();
      cartPosition.setQty((previousQty += qty));
    } else {
      const position = new CartPosition();
      position.setId(product.id);
      position.setBrand(product.brand);
      position.setName(product.name);
      position.setTypeCode(product.typeCode);
      position.setGender(product.gender);
      position.setPrice(product.price);
      position.setQty(qty);
      this.cartPositions.push(position);
    }
    this.setPositionsToLocalStorage(this.cartPositions);
  }

  public countProducts(id: number): number {
    const cartPosition: CartPosition = this.cartPositions.find(
      (item) => item.getId() === id
    );
    if (cartPosition) {
      return cartPosition.getQty();
    } else {
      return 0;
    }
  }

  public loadCartPositions() {
    return this.cartPositions;
  }

  public changeQty(product: Product, newQty: number) {
    const cartPosition: CartPosition = this.cartPositions.find(
      (item) => item.getId() === product.id
    );
    if (cartPosition) {
      cartPosition.setQty(newQty);
    }
    this.setPositionsToLocalStorage(this.cartPositions);
  }

  public deleteOneFromLocalStorage(id: number) {
    const cartPositions: CartPosition[] = this.cartPositions.filter(
      (item) => item.getId() !== id
    );
    if (cartPositions) {
      this.cartPositions = cartPositions;
      this.setPositionsToLocalStorage(this.cartPositions);
    }
  }

  public deleteAllFromLocalStorage() {
    localStorage.removeItem("positionsInCart");
    this.cartPositions = [];
  }

  private getPositionsFromLocalStorage(): CartPosition[] {
    const elements: string = localStorage.getItem("positionsInCart");
    let positionsInCart: CartPosition[];
    if (elements === null) {
      positionsInCart = [];
      localStorage.setItem("positionsInCart", JSON.stringify(positionsInCart));
    } else {
      positionsInCart = JSON.parse(elements);
      positionsInCart = positionsInCart.map((position) => {
        const typedPosition = new CartPosition();
        Object.assign(typedPosition, position);
        return typedPosition;
      });
    }
    return positionsInCart;
  }

  private setPositionsToLocalStorage(cartPositions: CartPosition[]) {
    localStorage.setItem("positionsInCart", JSON.stringify(cartPositions));
  }
}
