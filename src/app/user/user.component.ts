import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-user",
  templateUrl: "./user.component.html",
  styleUrls: ["./user.component.css"]
})
export class UserComponent implements OnInit {
  constructor() {}

  public listUser: user[];

  ngOnInit() {
    this.listUser = new Array<user>();
    this.listUser.push(new user("nciolas", "zarciel", "fr"));
  }
}

class user {
  public name: string;
  public nickname: string;
  public country: string;

  constructor(name: string, nickname: string, country: string) {
    this.name = name;
    this.nickname = nickname;
    this.country = country;
  }
}
