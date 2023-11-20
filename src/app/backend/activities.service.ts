import { Injectable } from '@angular/core';
import { LoggerService } from '../utils/logger.service';

@Injectable({
  providedIn: 'root'
})

export class ActivitiesService {

  activities: IActivity[];

  constructor(private logger: LoggerService) { 
    this.activities = [{ date: new Date(2014, 7, 10), place: 'Aula02', monitor: 'Miguel Goyena', type: ActivityType.BodyPump },
      { date: new Date(2022, 8, 12), place: 'Aula01', monitor: 'Miguel Goyena', type: ActivityType.Pilates }];
  }

  getActivities(): IActivity[] {
    return this.activities;
  }

  createActivity(newActivity: IActivity ){
    this.activities.push(newActivity);
  }
}
export interface IActivity {
  date: Date;
  place: String;
  monitor: String;
  type: ActivityType;
}

export enum ActivityType{
  BodyPump = "BodyPump",
  Spinning = "Spinning",
  Pilates = "Pilates"
}
