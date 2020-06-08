export class CartPosition {
  private id: number;
  private brand: string;
  private name: string;
  private typeCode: string;
  private gender: string;
  private price: number;
  private qty: number;
  private orderTotalValue: number;

  // constructor(id: number, qty: number) {
  //   this.id = id;
  //   this.qty = qty;
  // }

  getId(): number {
    return this.id;
  }

  setId(id: number): void {
    this.id = id;
  }

  getBrand(): string {
    return this.brand;
  }

  setBrand(brand: string): void {
    this.brand = brand;
  }

  getName(): string {
    return this.name;
  }

  setName(name: string): void {
    this.name = name;
  }

  getTypeCode(): string {
    return this.typeCode;
  }

  setTypeCode(typeCode: string): void {
    this.typeCode = typeCode;
  }

  getGender(): string {
    return this.gender;
  }

  setGender(gender: string): void {
    this.gender = gender;
  }

  getPrice(): number {
    return this.price;
  }

  setPrice(price: number): void {
    this.price = price;
  }

  getQty(): number {
    return this.qty;
  }

  setQty(qty: number): void {
    this.qty = qty;
  }

  calculateProductTotalValue(): number {
    return this.getPrice() * this.getQty();
  }

  calculateOrderTotalValue(arr: CartPosition[]): number {
    return arr
      .map((el) => el.getQty() * el.getPrice())
      .reduce((prev, next) => prev + next);
  }
}
