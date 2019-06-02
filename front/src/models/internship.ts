import {Company} from './company';
import {Student} from './student';

export interface Internship {
  id?: number;
  name?: string;
  studentId?: number;
  companyId: number;
  startDate?: Date;
  endDate?: Date;
  period?: String;
  contractRenewed?: String;
  salary?: String;
  residence?: String;
  hasCompanyCar?: Boolean;
  tuteur?: String;
  rating?: number;
  comment?: String;
}
