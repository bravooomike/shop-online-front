import { SharedRoutingModule } from "./shared-routing.module";
import { RouterModule } from "@angular/router";
import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { HeaderComponent } from "./header/header.component";
import { CurrencyPipe } from "./pipes/currency.pipe";
import { ProductTypeCodePipe } from "./pipes/product-type-code.pipe";
import { FirstLetterUppercasePipe } from "./pipes/first-letter-uppercase.pipe";
import { SpinnerComponent } from "./spinner/spinner.component";
import { LoginComponent } from "./login/login.component";

@NgModule({
  declarations: [
    HeaderComponent,
    CurrencyPipe,
    ProductTypeCodePipe,
    FirstLetterUppercasePipe,
    SpinnerComponent,
    LoginComponent,
  ],
  imports: [CommonModule, RouterModule, SharedRoutingModule],
  exports: [
    HeaderComponent,
    SpinnerComponent,
    CurrencyPipe,
    ProductTypeCodePipe,
    FirstLetterUppercasePipe,
  ],
})
export class SharedModule {}
