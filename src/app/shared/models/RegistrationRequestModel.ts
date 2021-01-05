export interface RegistrationRequestModel {
  userType: 'mentor' | 'mentee';
  fullName: string;
  login: string;
  email: string;
  password: string;
  classFormat: Array<string>;
  skills: Array<string>;
  qualificationLevel: string;
  menteeQualificationLevel?: Array<string>;
  dateOfBirth: Date;
  telegramLink?: string;
  aboutYou: string;
  base64File: string;
}
