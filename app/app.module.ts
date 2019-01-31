import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { CommonModule } from "@angular/common"; // Directives such as ngif ngfor
import { AppComponent} from "./app.component";
import {RouterModule, Routes} from "@angular/router";
import { PassengerDashboardModule } from "./passenger-dashboard/passenger-dashboard.module";
import {HomeComponent} from "./home.component";
import {NotFoundComponent} from "./not-found.component";


const routes: Routes = [
  {path: '', component: HomeComponent, pathMatch: 'full'},
  {path: '**', component: NotFoundComponent},
]
@NgModule({
  declarations:
    [
      AppComponent,
      HomeComponent,
      NotFoundComponent
    ],
  imports:
    [
      // Angular modules
      BrowserModule,
      CommonModule,
      RouterModule.forRoot(routes, {useHash: true}),

      // Custom modules
      PassengerDashboardModule
    ],
  bootstrap: [AppComponent] // Tells Angular which component to first be initialized
})
export class AppModule{

}
