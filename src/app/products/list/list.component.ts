import { ProductTypeCodePipe } from "./../../shared-module/pipes/product-type-code.pipe";
import { CartService } from "./../../cart/cart.service";
import { Component, OnInit, ViewChild } from "@angular/core";
import { ProductsService } from "../products.service";
import { Product } from "../model/product.model";

@Component({
  selector: "app-list",
  templateUrl: "./list.component.html",
  styleUrls: ["./list.component.scss"],
})
export class ListComponent implements OnInit {
  private products: Product[] = [];
  private filteredProducts = [];
  private productsWithQty: Product[] = [];
  private isSorted: boolean = false;
  private isLoaded: boolean = false;

  private settings = [
    { displayName: "Marka", name: "brand" },
    { displayName: "Nazwa produktu", name: "name" },
    { displayName: "Typ produktu", name: "typeCode" },
    { displayName: "Płeć", name: "gender" },
    { displayName: "Cena", name: "price" },
    { displayName: "Koszyk", name: null },
  ];

  constructor(
    private productsService: ProductsService,
    private cartService: CartService,
    private productTypeCodePipe: ProductTypeCodePipe
  ) {}

  ngOnInit() {
    this.getAll();
  }

  public getAll(): void {
    this.productsService.getAll().subscribe((products) => {
      this.products = products;
      this.filterByPhrase(null);
      this.isLoaded = !this.isLoaded;
    });
  }

  public filterByPhrase(value: string) {
    if (!value || value === "") {
      this.filteredProducts = this.products;
    } else {
      this.filteredProducts = this.products.filter((item) => {
        const text =
          item.brand +
          item.name +
          this.productTypeCodePipe.transform(item.typeCode) +
          item.gender +
          item.price;
        return text.toLowerCase().search(value.toLowerCase()) !== -1;
      });
    }
  }

  public filterByCheckbox(value: boolean) {
    this.productsWithQty = [];
    if (!value) {
      this.filteredProducts = this.products;
    } else {
      const productsInCart = this.cartService.loadCartPositions();
      this.products.filter((el) => {
        productsInCart.forEach((elem) => {
          const id = elem.getId();
          if (id === el.id) {
            this.productsWithQty.push(el);
          }
        });
      });
      this.filteredProducts = this.productsWithQty;
    }
  }

  public sortItems(e) {
    this.filteredProducts = this.products.sort((a, b) => {
      const name = e.target.id;
      const x = this.getValue(a[name]);
      const y = this.getValue(b[name]);

      if (!this.isSorted) {
        if (x < y) {
          return -1;
        }
        if (x > y) {
          return 1;
        }
        return 0;
      } else {
        if (x > y) {
          return -1;
        }
        if (x < y) {
          return 1;
        }
        return 0;
      }
    });
    this.isSorted = !this.isSorted;
  }

  private getValue(value: string | number): string | number {
    if (typeof value === "string") {
      return value.toLowerCase();
    } else {
      return value;
    }
  }
}
