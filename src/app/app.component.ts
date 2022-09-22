import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'AngularCourse-S5-Assignment-4';
  numbers: number[] = []
  number: any;

  onNumberAdded(numberData: {number: number}) {
    this.numbers.push(numberData.number);
    this.number = numberData.number;
  }
}
