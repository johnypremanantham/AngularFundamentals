import { Component, OnInit } from "@angular/core";
import { Passenger } from "../../models/passenger.interface";
import {PassengerDashboardService} from "../../passenger-dashboard.service";

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
    >
    </passenger-detail>
  </div>
  `
})
export class PassengerDashboardComponent implements OnInit{
  passengers: Passenger[];

  constructor(
    private passengerService: PassengerDashboardService
  ){// Dependency injection

  }
  ngOnInit(): void {
    this.passengerService
      .getPassengers()
      .subscribe((data: Passenger[]) => this.passengers = data);
  }

  handleRemove(event: Passenger){
    this.passengers = this.passengers.filter((passenger: Passenger) => event.id !== passenger.id);
  }

  handleEdit(event: Passenger){
    this.passengers = this.passengers.map((passenger: Passenger) => {
      if(passenger.id === event.id){
        passenger = Object.assign({}, passenger, event); // Immutable operation
      }
      return passenger;
    });
  }

}
