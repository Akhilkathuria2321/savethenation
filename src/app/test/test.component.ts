import { Component, OnInit } from '@angular/core';
import { DateserviceService } from '../dateservice.service';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.scss']
})
export class TestComponent implements OnInit {
  title = 'Yeah. It works !!';
  months = ['Jan', 'Feb', 'Mar'];
  isAvailable = false;
  innerOne;
  ngOnInit() { }

  constructor(dateService: DateserviceService) {
    this.innerOne = dateService.serviceProperty;
  }

  clicked(event) {
    this.isAvailable = this.isAvailable === false ? true : false;
    console.log(event);
  }

  changeMonth(event) {
    alert('Month changed to ');
    console.log(event);
  }
}
