import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormControl, ReactiveFormsModule, FormGroup, Validators } from '@angular/forms';
import { ActivitiesService, ActivityType, IActivity } from '../backend/activities.service';

@Component({
  selector: 'diw-activities-form-reactive',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './activities-form-reactive.component.html',
  styleUrl: './activities-form-reactive.component.scss'
})
export class ActivitiesFormReactiveComponent {
  activityForm = new FormGroup({
    monitor: new FormControl('Miguel Goyena'),
    place: new FormControl('Aula02'),
    date: new FormControl(new Date(), Validators.required),
    type: new FormControl(ActivityType.BodyPump)
  });
  submitted = false;
  activityService: ActivitiesService;
  activityTypes = Object.values(ActivityType);

  constructor(activityService: ActivitiesService){
    this.activityService = activityService;
  }
  
  newActivity() {
    this.submitted = true;
    const newActivityData: IActivity = {id: 4, activity_date: this.activityForm.value.date!, place: this.activityForm.value.place!, monitor: this.activityForm.value.monitor!, type: this.activityForm.value.type!};
    this.activityService.createActivityAPI(newActivityData)
      .subscribe(response => {
        console.log('Created new Activity: '+response);
        // Aqui vamos a recargar la lista de actividades
        this.activityService.notifyUpdateActivity(null);
      });
  }
}
