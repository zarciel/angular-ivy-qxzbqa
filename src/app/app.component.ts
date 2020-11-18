import { Component, VERSION } from "@angular/core";

@Component({
  selector: "my-app",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent {
  name = "Angular " + VERSION.major;

  public positionUser: number;

  public userName: string;

  getName(newItem: string) {
    this.userName = newItem;
  }

  public listDays: string[];

  ngOnInit() {
    this.listDays = new Array<string>();
    this.listDays.push(
      "Monday",
      "Tuesday",
      "Wenesday",
      "Thursday",
      "Friday",
      "Sathurday",
      "Sunday"
    );
  }
}
