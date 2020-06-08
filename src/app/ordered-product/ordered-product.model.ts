export class OrderedProduct {
  private name: string;
  private qty: number;
  private active: boolean;

  getName() {
    return this.name;
  }
  setName(name: string) {
    this.name = name;
  }

  getQty() {
    return this.qty;
  }
  setQty(qty: number) {
    this.qty = qty;
  }

  getActive() {
    return this.active;
  }
  setActive(active: boolean) {
    this.active = active;
  }
}
