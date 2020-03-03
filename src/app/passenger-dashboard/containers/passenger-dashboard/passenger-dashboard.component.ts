import {Component, OnInit} from '@angular/core';
import {Passenger} from '../../../models/Passenger';
import {PassengerDashboardService} from '../../passenger-dashboard.service';

@Component({
  selector: 'app-passenger-dashboard',
  templateUrl: './passenger-dashboard.component.html',
  styleUrls: ['./passenger-dashboard.component.scss']
})
export class PassengersDashBoardComponent implements OnInit {

  passengers: Passenger[];
  logo = 'assets/pics/plane2.png';

  // allows us to inject the dependency and tells us is a private method; is the same as  constructor(foo){this.foo=foo}
  constructor(
    private passengerService: PassengerDashboardService
    // uses the token PassengerDashboardService to automatically bind it
    // to an internal property called passengerService (same thing as this.passenger service=passengerService)
  ) {
  }

  ngOnInit() {
    // tslint:disable-next-line:max-line-length
    // this.passengers = this.passengerService.getPassengers(); nu merge asa deoarece incercam sa asignam un obervable la un array de pasageri
    this.passengerService
      .getPassengers()
      .subscribe((data) => { // in subscribe we are gonna get the data that is gonna be of the type Passenger[]
        console.log('Data', data);
        this.passengers = data; // we are bining the result of calling the method getPassengers()
      });
  }

// looping through our passenger array
// and we are getting each individual passenger; if the passenger has changed we overwrite some of its properties
// detects if we are in the current passenger that has been fire from the edit event
  handleEdit(event: Passenger) {
    this.passengerService
      .updatePassenger(event)
      .subscribe(() => {
        this.passengers = this.passengers.map((passenger) => {
          // tslint:disable-next-line:max-line-length
          if (passenger.id === event.id) { // detects if we are in the current passenger that has been fire from the edit event if so we are gonna use an immutable operation-->
            // tslint:disable-next-line:max-line-length
            passenger = Object.assign({}, passenger, event); // this takes the original passenger and merges the latest changes of the event in
          }
          return passenger;
        });
      });
  }


  //   console.log(this.passengers);
  // }

  handleRemove(event: Passenger
  ) {
    this.passengers = this.passengers.filter((passenger: Passenger) => passenger.id !== event.id);
  }
}
