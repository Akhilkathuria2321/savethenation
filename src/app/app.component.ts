import { Component } from '@angular/core';
import { DateserviceService } from './dateservice.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'app';
  todaysDate;
  serviceProperty;
  constructor(dateservice: DateserviceService) {
    this.todaysDate = dateservice.getTodaysDate();
    dateservice.serviceProperty = 'New one Ahh!!';
    this.serviceProperty = dateservice.serviceProperty;
  }
}
