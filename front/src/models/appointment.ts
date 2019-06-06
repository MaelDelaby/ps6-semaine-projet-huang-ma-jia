import {User} from "./user";

export interface Appointment {
  id?: number;
  asker?: User;
  receiver?: User;
  beginningDate: Date,
  duration: number,
  reason : string,
}
