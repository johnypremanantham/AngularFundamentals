import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { CommonModule } from "@angular/common"; // Directives such as ngif ngfor
import { AppComponent} from "./app.component";

import { PassengerDashboardModule } from "./passenger-dashboard/passenger-dashboard.module";


@NgModule({
  declarations:
    [
      AppComponent
    ],
  imports:
    [
      // Angular modules
      BrowserModule,
      CommonModule,

      // Custom modules
      PassengerDashboardModule
    ],
  bootstrap: [AppComponent] // Tells Angular which component to first be initialized
})
export class AppModule{

}
