import { Component } from '@angular/core';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';  // Import CommonModule
import { MatToolbarModule } from '@angular/material/toolbar';  // Import MatToolbarModule

@Component({
  selector: 'app-calendar',
  standalone: true,
  templateUrl: './calendar.component.html',
  styleUrls: ['./calendar.component.css'],
  imports: [
    CommonModule,  // Add CommonModule here
    MatDatepickerModule,
    MatNativeDateModule,
    MatInputModule,
    MatButtonModule,
    FormsModule,
    HttpClientModule,
    MatToolbarModule  // Add MatToolbarModule here
  ]
})
export class CalendarComponent {
  selectedDate: Date | null = null;  // Initialize with null
  message: string = '';  // Initialize with an empty string
  greetingMessage: string;  // Add greetingMessage property

  constructor(private http: HttpClient) {
    const daysOfWeek = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    const today = new Date();
    const dayOfWeek = daysOfWeek[today.getDay()];
    this.greetingMessage = `Hello Valerie, hope you are having a great ${dayOfWeek}. I would like to take you on a date!`;
  }

  notify() {
    if (this.selectedDate) {
      const month   = this.selectedDate.getUTCMonth() + 1; // months from 1-12
      const day     = this.selectedDate.getUTCDate();
      const year    = this.selectedDate.getUTCFullYear();

      const newDate = day + "/" + month + "/" + year;

      this.http.post('https://ntfy.sh/valerie-date', "Valerie wants to go on a date on " + newDate).subscribe(response => {
        this.message = "Juan has been notified";
      }, error => {
        console.error("Error notifying Juan", error);
      });
    }
  }
}
