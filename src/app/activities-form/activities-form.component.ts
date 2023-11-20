import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivitiesService, ActivityType } from '../backend/activities.service';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'diw-activities-form',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './activities-form.component.html',
  styleUrl: './activities-form.component.scss'
})
export class ActivitiesFormComponent {

  activityService: ActivitiesService;
  activityTypes = Object.values(ActivityType);
  activity = { date: new Date(2014, 7, 10), place: 'Aula02', monitor: 'Miguel Goyena', type: ActivityType.BodyPump };
  submitted = false;

  constructor(activityService: ActivitiesService){
    this.activityService = activityService;
  }

  newActivity() {
    this.submitted = true;
    this.activityService.createActivity(this.activity);
  }
}
