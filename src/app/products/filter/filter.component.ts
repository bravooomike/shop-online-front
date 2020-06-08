import { Component, Output, EventEmitter } from "@angular/core";

@Component({
  selector: "app-filter",
  templateUrl: "./filter.component.html",
  styleUrls: ["./filter.component.scss"],
})
export class FilterComponent {
  private value: string = "";
  private isChecked: boolean = false;
  @Output() changedValue: EventEmitter<string> = new EventEmitter<string>();
  @Output() changedCheck: EventEmitter<boolean> = new EventEmitter<boolean>();

  emitValue() {
    this.changedValue.emit(this.value);
  }
  emitCheck() {
    this.changedCheck.emit(this.isChecked);
  }
}
