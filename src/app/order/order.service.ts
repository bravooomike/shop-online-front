import { Observable } from "rxjs";
import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Order } from "./order.model";

@Injectable({
  providedIn: "root",
})
export class OrderService {
  private apiUrl: string = "rest/shop/order";

  constructor(private httpClient: HttpClient) {}

  public getAll(): Observable<Order[]> {
    return this.httpClient.get<Order[]>(`${this.apiUrl}/`);
  }

  public save(order: Order): Observable<Order> {
    return this.httpClient.post<Order>(`${this.apiUrl}/`, order);
  }
}
