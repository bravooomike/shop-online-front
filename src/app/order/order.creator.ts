import { CartPosition } from "./../cart/cart-position.model";
import { Order } from "./order.model";
import { OrderedProduct } from "./../ordered-product/ordered-product.model";

export class OrderCreator {
  static fromCart(
    cartPositions: CartPosition[],
    orderTotalValue: number,
    deliveryType: string
  ): Order {
    const order: Order = new Order();
    order.setDate(new Date());
    order.setCost(orderTotalValue);
    order.setStatusCode("prz");
    order.setActive(true);
    order.setPickupCode(deliveryType);
    order.setClientId(1);

    const orderedProducts: OrderedProduct[] = [];
    cartPositions.forEach((el) => {
      const orderedProduct: OrderedProduct = new OrderedProduct();
      orderedProduct.setName(el.getName());
      orderedProduct.setQty(el.getQty());
      orderedProduct.setActive(true);
      console.log(orderedProduct);
      orderedProducts.push(orderedProduct);
      console.log(orderedProducts);
    });
    order.setOrderedProducts(orderedProducts);

    console.log(order);
    return order;
  }
}
