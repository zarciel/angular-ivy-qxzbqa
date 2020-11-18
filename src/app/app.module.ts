import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { FormsModule } from "@angular/forms";

import { AppComponent } from "./app.component";
import { HelloComponent } from "./hello.component";
import { UserComponent } from "./user/user.component";
import { NavComponent } from "./nav/nav.component";
import { DayComponent } from './day/day.component';

@NgModule({
  imports: [BrowserModule, FormsModule],
  declarations: [AppComponent, HelloComponent, UserComponent, NavComponent, DayComponent],
  bootstrap: [AppComponent]
})
export class AppModule {}
