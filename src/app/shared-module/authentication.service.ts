import { Observable } from "rxjs";
import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { HttpHeaders } from "@angular/common/http";

@Injectable({
  providedIn: "root",
})
export class AuthenticationService {
  private url: string = "rest/shop/auth";

  constructor(private httpClient: HttpClient) {}

  public login(login: string, password: string): Observable<void> {
    const headers = new HttpHeaders();
    headers.append("Authorization", "Basic " + btoa(login + ":" + password));
    headers.append("Content-type", "application/json");
    return this.httpClient.get<void>(`${this.url}/`, { headers: headers });
  }
}
