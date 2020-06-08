import { OrderedProduct } from "./../ordered-product/ordered-product.model";
export class Order {
  private date: Date;
  private cost: number;
  private statusCode: string;
  private active: boolean;
  private pickupCode: string;
  private clientId: number;
  private orderedProducts: OrderedProduct[];

  getDate() {
    return this.date;
  }
  setDate(date: Date) {
    this.date = date;
  }

  getCost() {
    return this.cost;
  }
  setCost(cost: number) {
    this.cost = cost;
  }

  getStatusCode() {
    return this.statusCode;
  }
  setStatusCode(statusCode: string) {
    this.statusCode = statusCode;
  }

  getActive() {
    return this.active;
  }
  setActive(active: boolean) {
    this.active = active;
  }

  getPickupCode() {
    return this.pickupCode;
  }
  setPickupCode(pickupCode: string) {
    this.pickupCode = pickupCode;
  }

  getClientId() {
    return this.clientId;
  }
  setClientId(clientId: number) {
    this.clientId = clientId;
  }

  getOrderedProducts() {
    return this.orderedProducts;
  }
  setOrderedProducts(orderedProducts: OrderedProduct[]) {
    this.orderedProducts = orderedProducts;
  }
}
