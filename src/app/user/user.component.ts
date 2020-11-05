import { Component, Input, OnInit } from "@angular/core";

@Component({
  selector: "app-user",
  templateUrl: "./user.component.html",
  styleUrls: ["./user.component.css"]
})
export class UserComponent implements OnInit {
  constructor() {}

  public listUser: user[];

  @Input() item: number;

  ngOnInit() {
    this.listUser = new Array<user>();
    this.listUser.push(new user("nciolas", "zarciel", "fr"));
  }

  onAddUser() {
    this.listUser.push(
      new user(this.makeid(5), this.makeid(5), this.makeid(2))
    );
  }

  takeName(position: number) {
    if (position >= 0) {
      return this.listUser[position];
    } else {
      return "";
    }
  }

  makeid(length) {
    var result = "";
    var characters =
      "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
    var charactersLength = characters.length;
    for (var i = 0; i < length; i++) {
      result += characters.charAt(Math.floor(Math.random() * charactersLength));
    }
    return result;
  }

  /*numberOfRow() {
    this.listUser.length;
  }*/
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
