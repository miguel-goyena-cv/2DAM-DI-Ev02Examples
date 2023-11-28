import { Routes } from '@angular/router';
import { ActivitiesComponent } from './activities/activities.component';
import { ActivitiesFormReactiveComponent } from './activities-form-reactive/activities-form-reactive.component';

export const routes: Routes = [
    { path: 'list-activities', component: ActivitiesComponent },
    { path: 'create-activity', component: ActivitiesFormReactiveComponent },
];
