import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-day",
  templateUrl: "./day.component.html",
  styleUrls: ["./day.component.css"]
})
export class DayComponent implements OnInit {
  constructor() {}

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
  // this.listUser = new Array<user>();
  //this.listUser.push(new user("nciolas", "zarciel", "fr"));
  public listDays: string[];
}
