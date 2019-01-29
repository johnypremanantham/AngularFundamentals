import {Passenger} from "./models/passenger.interface";
import {Http, Response} from "@angular/http";
import {Injectable} from "@angular/core";
import {Observable} from "rxjs/Observable";
import 'rxjs/add/operator/map';

const PASSENGER_API = 'api/passengers'

@Injectable() // Tells angular we can inject things in to its constructor
export class PassengerDashboardService{
  constructor(
    private http: Http
  ){
  }


  getPassengers(): Observable<Passenger[]>{
    return this.http
      .get(PASSENGER_API)
      .map((response: Response) => response.json())
  }
}
