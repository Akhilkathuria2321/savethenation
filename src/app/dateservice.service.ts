import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DateserviceService {
  serviceProperty;
  constructor() { }
  getTodaysDate() {
    return new Date();
  }
}
