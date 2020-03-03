import { InMemoryDbService } from 'angular-in-memory-web-api';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    const passengers = [
      {
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
      }
    ];
    return {passengers};
  }
}
