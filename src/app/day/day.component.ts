import { Component, Input, OnInit } from "@angular/core";

@Component({
  selector: "app-day",
  templateUrl: "./day.component.html",
  styleUrls: ["./day.component.css"]
})
export class DayComponent implements OnInit {
  constructor() {}

  ngOnInit() {}
  // this.listUser = new Array<user>();
  //this.listUser.push(new user("nciolas", "zarciel", "fr"));

  @Input() day;
}
