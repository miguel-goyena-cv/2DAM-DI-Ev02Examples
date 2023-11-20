import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'diw-greeting-component',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './greeting-component.component.html',
  styleUrl: './greeting-component.component.scss'
})
export class GreetingComponentComponent {
  students = [ 'Ion', 'Amaia', 'Edurne', 'Miguel'];
}
