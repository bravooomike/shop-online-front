import { NgModule } from "@angular/core";
import { RouterModule, Route } from "@angular/router";
import { LoginComponent } from "./login/login.component";
import { ListComponent } from "../cart/list/list.component";

const SHARED_ROUTES: Route[] = [
  { path: "login", component: LoginComponent },
  { path: "cart", component: ListComponent },
];

@NgModule({
  imports: [RouterModule.forChild(SHARED_ROUTES)],
  exports: [RouterModule],
})
export class SharedRoutingModule {}
