import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { GreetingComponentComponent } from './greeting-component/greeting-component.component';
import { ActivitiesComponent } from './activities/activities.component';

@Component({
  selector: 'diw-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, GreetingComponentComponent, ActivitiesComponent],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title: string = 'angular-hola-clase';
}
