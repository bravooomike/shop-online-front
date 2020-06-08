import { ListComponent } from "./list/list.component";
import { Component, OnInit, ViewChild } from "@angular/core";

@Component({
  selector: "app-products",
  templateUrl: "./products.component.html",
  styleUrls: ["./products.component.scss"],
})
export class ProductsComponent implements OnInit {
  @ViewChild("list", { static: true }) list: ListComponent;

  constructor() {}

  ngOnInit() {}

  public onChangedValue(value): void {
    this.list.filterByPhrase(value);
  }

  public onChangedCheck(value): void {
    this.list.filterByCheckbox(value);
  }
}
