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
  hasCompanyCar?: Boolean;
  tuteur?: String;
  rating?: number;
  comment?: String;
}
