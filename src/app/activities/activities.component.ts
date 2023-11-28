import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivitiesService, IActivity } from '../backend/activities.service';
import { LoggerService } from '../utils/logger.service';
import { Subscription } from 'rxjs/internal/Subscription';

@Component({
  selector: 'diw-activities',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './activities.component.html',
  styleUrl: './activities.component.scss'
})
export class ActivitiesComponent {
  activities: IActivity[] = [];
  activityService: ActivitiesService;
  subscriptionUpdate: Subscription = new Subscription;
  constructor(activityService: ActivitiesService){
    this.activityService = activityService;
  }

  ngOnInit() {

    // We Fetch Information
    this.fetchActivities();

    // We subscribe to changes in Activities
    this.subscriptionUpdate = this.activityService.changesOnActivities.subscribe(
      () => this.fetchActivities()
    );
 }
 
  private fetchActivities(): void {
    this.activityService.getActivitiesAPI()
    .subscribe(data => {
        //let resultado = data;
        this.activities = data;
      }
    );
  }

 ngOnDestroy() {
     this.subscriptionUpdate.unsubscribe();
 }
}
