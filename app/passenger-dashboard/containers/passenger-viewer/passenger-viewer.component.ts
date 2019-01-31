import {Component, OnInit} from "@angular/core";
import {PassengerDashboardService} from "../../passenger-dashboard.service";
import {Passenger} from "../../models/passenger.interface";
import {ActivatedRoute, Params, Router} from "@angular/router";
import 'rxjs/add/operator/switchMap';

@Component({
  selector: 'passenger-viewer',
  styleUrls: ['passenger-viewer.component.scss'],
  template:
      `
  <div>
    <button (click)="goBack()"> &lsaquo; Go back</button>
    <passenger-form
    [detail]="passenger"
    (update)="onUpdatePassenger($event);">
      
    </passenger-form>
  </div>
   `
})

export class PassengerViewerComponent implements OnInit{

  passenger: Passenger;

  // Use dependency injection to access our servlet, this is a container compnent (smart)
  // So it will have access to the service
  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private passengerService: PassengerDashboardService
  ){}

  ngOnInit(): void {

    this.route.params
      .switchMap((data: Passenger) => this.passengerService.getPassenger(data.id))
      .subscribe((data: Passenger) => this.passenger = data);
  }

  onUpdatePassenger(event: Passenger){
    this.passengerService
      .updatePassenger(event)
      .subscribe((data: Passenger) => {
        this.passenger = Object.assign({}, this.passenger, event); // Merge this.passenger with the "new" passenger (event)
      })
  }

  goBack(){
    this.router.navigate(['/passengers']); // Imperative routing because we are using the native API
  }

}
