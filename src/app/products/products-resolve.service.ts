import { ProductsService } from "./products.service";
import { Injectable } from "@angular/core";
import {
  Resolve,
  ActivatedRouteSnapshot,
  RouterStateSnapshot,
} from "@angular/router";
import { Product } from "./model/product.model";

@Injectable({
  providedIn: "root",
})
export class ProductsResolveService implements Resolve<Product[]> {
  constructor(private productsService: ProductsService) {}

  resolve(route: ActivatedRouteSnapshot) {
    return this.productsService.getAll();
  }
}
