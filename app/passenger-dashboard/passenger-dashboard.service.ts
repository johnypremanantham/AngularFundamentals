import {Passenger} from "./models/passenger.interface";

export class PassengerDashboardService{
  constructor(){}

  getPassengers(): Passenger[]{
    return [
      {
        id: 1,
        fullname: 'Alfred',
        checkedIn: false,
        children: [{name: 'aron', age: 12}, {name: 'baron', age: 122}]
      },
      {
        id: 2,
        fullname: 'John',
        checkedIn: true,
        checkInDate: 1490742000000
      }
    ];
  }
}
