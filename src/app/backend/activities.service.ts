import { Injectable } from '@angular/core';
import { LoggerService } from '../utils/logger.service';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/internal/Observable';
import { ReplaySubject } from 'rxjs/internal/ReplaySubject';

//const apiURL = 'https://6544b9d55a0b4b04436cd7e3.mockapi.io/gymdam';
const apiURL = 'http://127.0.0.1:8000';

@Injectable({
  providedIn: 'root'
})
export class ActivitiesService {

  updateSubject: ReplaySubject<any> = new ReplaySubject();
  changesOnActivities: Observable<any> = this.updateSubject.asObservable();

  /**
  * @deprecated If we use API methods this is not used
  */
  activities: IActivity[];

  constructor(private logger: LoggerService, private http: HttpClient) { 
    this.activities = [{ id: 1, startDate: new Date(2014, 7, 10), endDate: new Date(2014, 7, 10),  activityType: {id: 1, name: ActivityTypeName.BodyPump, monitorsNeeded: 1} },
      { id: 2, startDate: new Date(2022, 8, 12), endDate: new Date(2022, 8, 12), activityType: {id: 2, name: ActivityTypeName.Pilates, monitorsNeeded: 1} }];
  }

  getActivitiesAPI(): Observable<IActivity[]> {
    return this.http.get<IActivity[]>(apiURL+"/activity");
  }

  /**
  * @deprecated Use getActivitiesAPI in order to use REST API
  */
  getActivities(): IActivity[] {
    return this.activities;
  }

  /**
  * @deprecated Use createActivityAPI in order to use REST API
  */
  createActivity(newActivity: IActivity ){
    this.activities.push(newActivity);
  }

  createActivityAPI(newActivity: IActivity ): Observable<IActivity>{
    return this.http.post<IActivity>(apiURL+"/actividades", newActivity);
  }

  notifyUpdateActivity = (data: any) => {
    this.updateSubject.next(data)
  }
}
// export interface IActivity {
//   activity_date: Date;
//   place: String;
//   monitor: String;
//   type: ActivityType;
//   id: Number;
// }

// export enum ActivityType{
//   BodyPump = "BodyPump",
//   Spinning = "Spinning",
//   Pilates = "Pilates"
// }

export interface IActivity {
  startDate: Date;
  endDate: Date;
  activityType: IActivityType;
  id: Number;
}

export interface IActivityType {
  id: Number;
  name: ActivityTypeName;
  monitorsNeeded: Number;
}

export enum ActivityTypeName{
  BodyPump = "BodyPump",
  Spinning = "Spinning",
  Pilates = "Pilates"
}
