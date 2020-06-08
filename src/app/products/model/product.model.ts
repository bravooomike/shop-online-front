export interface Product {
  id: number;
  brand: string;
  name: string;
  typeCode: string;
  gender: string;
  price: number;
  active: boolean;
}

// export class Product {
//   id: number;
//   brand: string;
//   name: string;
//   typeCode: string;
//   gender: string;
//   price: number;
//   active: boolean;

//   getId(): number {
//     return this.id;
//   }

//   setId(id: number): void {
//     this.id = id;
//   }

//   getBrand(): string {
//     return this.brand;
//   }

//   setBrand(brand: string): void {
//     this.brand = brand;
//   }

//   getName(): string {
//     return this.name;
//   }

//   setName(name: string): void {
//     this.name = name;
//   }

//   getTypeCode(): string {
//     return this.typeCode;
//   }

//   setTypeCode(typeCode: string): void {
//     this.typeCode = typeCode;
//   }

//   getGender(): string {
//     return this.gender;
//   }

//   setGender(gender: string): void {
//     this.gender = gender;
//   }

//   getPrice(): number {
//     return this.price;
//   }

//   setPrice(price: number): void {
//     this.price = price;
//   }
// }
