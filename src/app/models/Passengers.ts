import {Passenger} from './Passenger';

export const passengers: Passenger[] = [{
  id: 1,
  fullName: 'Marry',
  checkedIn: true,
  checkInDate: 1490742000000,
  children: [
    {
      name: 'Ana',
      age: 10
    },
    {
      name: 'Ben',
      age: 8
    }
  ]
},
  {
    id: 2,
    fullName: 'John',
    checkedIn: false,
    checkInDate: null,
    children: null
  },
  {
    id: 3,
    fullName: 'Ian',
    checkedIn: true,
    checkInDate: 12042020,
    children: null
  },
  {
    id: 4,
    fullName: 'Bob',
    checkedIn: false,
    checkInDate: null,
    children: null
  }];
