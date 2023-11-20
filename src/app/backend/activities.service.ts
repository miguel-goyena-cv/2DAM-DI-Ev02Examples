import { Injectable } from '@angular/core';
import { LoggerService } from '../utils/logger.service';

@Injectable({
  providedIn: 'root'
})

export class ActivitiesService {

  constructor(private logger: LoggerService) { }
  getActivities(): IActivity[] {
    let activities = [{ date: new Date(2014, 7, 10), place: 'Aula02', monitor: 'Miguel Goyena', type: ActivityType.BodyPump },
      { date: new Date(2022, 8, 12), place: 'Aula01', monitor: 'Miguel Goyena', type: ActivityType.Pilates }];
    this.logger.log("Creadas 2 Actividades");
    return activities;
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
