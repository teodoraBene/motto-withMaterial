import {Passenger} from '../models/Passenger';
import {HttpClient, HttpHeaders, HttpRequest} from '@angular/common/http';
import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';
import {map} from 'rxjs/operators';

const PASSENGER_API = 'api/passengers';

@Injectable() // this tells angular that we can injects things into its constructor
export class PassengerDashboardService {

  // PASSENGER_API = './app/models/Passengers.ts';

  constructor(private http: HttpClient) {
    console.log(this.http);
  }

  getPassengers(): Observable<Passenger[]> {
    return this.http.get<Passenger[]>(PASSENGER_API);
  }

  updatePassenger(passenger: Passenger): Observable<Passenger> {
    let headers = new HttpHeaders({'Content-Type': 'application/json'});
    // this is creating a header that we will send with our Http request, that's going to tell the request it will be of aplication/json Type
    let options = ({headers: headers});
    return this.http.put<Passenger>(PASSENGER_API + '/' + passenger.id, passenger, options);
  }

  removePassengers(passenger: Passenger): Observable<Passenger> {
    return this.http.delete<Passenger>(PASSENGER_API + '/' + passenger.id);
  }
}

// .map((response: Response) => {
//     return response.json();  // method to extract the data as json Object
//   }
// );
