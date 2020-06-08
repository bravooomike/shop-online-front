import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
  name: "productTypeCode",
})
export class ProductTypeCodePipe implements PipeTransform {
  transform(value: string): string {
    if (value === "bie") {
      return "Do biegania";
    }

    if (value === "spo") {
      return "Sportowe";
    }

    if (value === "fit") {
      return "Fitness";
    }

    return "";
  }
}
