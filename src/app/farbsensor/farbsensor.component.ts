import { Component } from '@angular/core';

@Component({
  selector: 'app-farbsensor',
  templateUrl: './farbsensor.component.html',
  styleUrls: ['./farbsensor.component.css']
})
export class FarbsensorComponent {

  boxColor: string = '#ff0000'; // Set the initial color of the box to red

  changeBoxColor(newColor: string): void {
    this.boxColor = newColor;
  }
}
