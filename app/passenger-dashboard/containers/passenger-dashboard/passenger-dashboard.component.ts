import { Component, OnInit } from "@angular/core";
import { Passenger } from "../../models/passenger.interface";
import {PassengerDashboardService} from "../../passenger-dashboard.service";
import {error} from "util";
import {Router} from "@angular/router";

//Component decorator object
@Component({
  selector: 'passenger-dashboard',
  template: `
  <div>
  
    <div *ngFor="let pas of passengers">
    {{pas.fullname}}
    </div>
  
  
    <passenger-count
      [items]="passengers">
    </passenger-count>
    <passenger-detail
      *ngFor="let passenger of passengers"
      [detail]="passenger"
      (remove)="handleRemove($event)"
      (edit)="handleEdit($event)"
      (view)="handleView($event)"
    >
    </passenger-detail>
  </div>
  `
})
export class PassengerDashboardComponent implements OnInit{
  passengers: Passenger[];

  constructor(
    private passengerService: PassengerDashboardService, // Dependency injection
    private router: Router
  ){

  }
  ngOnInit(): void {
    this.passengerService
      .getPassengers()
      .subscribe((data: Passenger[]) => this.passengers = data, error1 => console.log("ERROR",error1));
  }

  handleRemove(event: Passenger){
    this.passengerService
      .removePassenger(event)
      .subscribe((data: Passenger) => {
        this.passengers = this.passengers
          .filter((passenger: Passenger) => event.id !== passenger.id);
      });

  }

  handleEdit(event: Passenger){
    this.passengerService
      .updatePassenger(event)
      .subscribe((data: Passenger) => {
        this.passengers = this.passengers.map((passenger: Passenger) => {
          if(passenger.id === event.id){
            passenger = Object.assign({}, passenger, event); // Immutable operation
          }
          return passenger;
        });
      });
  }

  handleView(event: Passenger){
    this.router.navigate(['/passengers', event.id]);
  }

}
