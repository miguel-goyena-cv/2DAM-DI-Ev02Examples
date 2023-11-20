import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivitiesService, IActivity } from '../backend/activities.service';
import { LoggerService } from '../utils/logger.service';

@Component({
  selector: 'diw-activities',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './activities.component.html',
  styleUrl: './activities.component.scss'
})
export class ActivitiesComponent {
  activities: IActivity[];
  constructor(activityService: ActivitiesService){
    this.activities = activityService.getActivities();
  }
}
