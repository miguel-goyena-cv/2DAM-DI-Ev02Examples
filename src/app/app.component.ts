import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { GreetingComponentComponent } from './greeting-component/greeting-component.component';
import { ActivitiesComponent } from './activities/activities.component';
import { ActivitiesFormComponent } from "./activities-form/activities-form.component";
import { ActivitiesFormReactiveComponent } from "./activities-form-reactive/activities-form-reactive.component";

@Component({
    selector: 'diw-root',
    standalone: true,
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss'],
    imports: [RouterOutlet, RouterLink, RouterLinkActive, CommonModule, RouterOutlet, GreetingComponentComponent, ActivitiesComponent, ActivitiesFormComponent, ActivitiesFormReactiveComponent]
})
export class AppComponent {
  title: string = 'angular-hola-clase';
}
