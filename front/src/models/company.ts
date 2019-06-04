import {Country} from './country';
export interface Company {
  id?: number;
  name?: string;
  iconImage?: string;
  countryId?: string;
  address?: string;
  rating?: number;
  employeesNumber?: number;
  creationDate?: Date;
  activitySector?: string;
  internshipNb?: number;
  hiringOpportunities?: string;
  description?: string;
  requestDate?: string;
  requestStudentId?: number;
}
