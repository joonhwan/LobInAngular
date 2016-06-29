import {ISchool} from './school';

export interface IClassroom {
  id:number;
  name:string;
  teacher:string;
  message:string;
  school_id:number;
  school?:ISchool;
}