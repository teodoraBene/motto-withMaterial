import {Child} from './Child';

export interface Passenger {
  id: number;
  fullName: string;
  checkedIn: boolean;
  checkInDate?: number; // the property is optional that's due to the '?'
  children: Child[] | null;
}
