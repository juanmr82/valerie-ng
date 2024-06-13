import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {CalendarComponent} from "./calendar/calendar.component";


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,CalendarComponent],
  template: '<app-calendar></app-calendar>',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'frontend';
}
