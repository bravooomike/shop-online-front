import { Component, OnInit } from "@angular/core";
import { AuthenticationService } from "../authentication.service";

@Component({
  selector: "app-login",
  templateUrl: "./login.component.html",
  styleUrls: ["./login.component.scss"],
})
export class LoginComponent implements OnInit {
  public login: string = "";
  public password: string = "";

  constructor(private authenticationService: AuthenticationService) {}

  ngOnInit() {}

  public back() {
    window.history.back();
  }

  public submit() {
    this.authenticationService.login(this.login, this.password).subscribe();
  }
}
