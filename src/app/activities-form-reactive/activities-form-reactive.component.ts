import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormControl, ReactiveFormsModule, FormGroup, Validators } from '@angular/forms';
import { ActivitiesService, ActivityTypeName, IActivity } from '../backend/activities.service';

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
    type: new FormControl(ActivityTypeName.BodyPump)
  });
  submitted = false;
  activityService: ActivitiesService;
  activityTypes = Object.values(ActivityTypeName);

  constructor(activityService: ActivitiesService){
    this.activityService = activityService;
  }
  
  newActivity() {
    this.submitted = true;
    const newActivityData: IActivity = { id: 4, startDate: new Date(2015, 7, 10), endDate: new Date(2015, 7, 10),  activityType: {id: 1, name: ActivityTypeName.Pilates, monitorsNeeded: 3}};
    this.activityService.createActivityAPI(newActivityData)
      .subscribe(response => {
        console.log('Created new Activity: '+response);
        // Aqui vamos a recargar la lista de actividades
        this.activityService.notifyUpdateActivity(null);
      });
  }
}
