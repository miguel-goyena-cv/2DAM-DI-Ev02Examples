import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivitiesService, ActivityTypeName } from '../backend/activities.service';
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
  activityTypes = Object.values(ActivityTypeName);
  activity = { id: 3, startDate: new Date(2014, 7, 10), endDate: new Date(2014, 7, 10),  activityType: {id: 1, name: ActivityTypeName.Pilates, monitorsNeeded: 3}};
  submitted = false;

  constructor(activityService: ActivitiesService){
    this.activityService = activityService;
  }

  newActivity() {
    this.submitted = true;
    this.activityService.createActivity(this.activity);
  }
}
