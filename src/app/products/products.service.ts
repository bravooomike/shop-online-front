import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { Product } from "./model/product.model";

@Injectable({
  providedIn: "root",
})
export class ProductsService {
  private apiUrl: string = "rest/shop/product";

  constructor(private httpClient: HttpClient) {}

  public getAll(): Observable<Product[]> {
    return this.httpClient.get<Product[]>(`${this.apiUrl}/`);
  }
}
