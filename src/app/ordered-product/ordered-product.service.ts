import { OrderedProduct } from "./ordered-product.model";
import { Observable } from "rxjs";
import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";

@Injectable({
  providedIn: "root",
})
export class OrderedProductService {
  private apiUrl: string = "rest/shop/orderedProduct";

  constructor(private httpClient: HttpClient) {}

  public getAll(): Observable<OrderedProduct[]> {
    return this.httpClient.get<OrderedProduct[]>(`${this.apiUrl}/`);
  }

  public save(orderedProduct: OrderedProduct): Observable<OrderedProduct> {
    return this.httpClient.post<OrderedProduct>(
      `${this.apiUrl}/`,
      orderedProduct
    );
  }
}
