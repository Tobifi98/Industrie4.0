import { Component } from '@angular/core';

@Component({
  selector: 'app-bandsensor',
  templateUrl: './bandsensor.component.html',
  styleUrls: ['./bandsensor.component.css']
})
export class BandsensorComponent {

  isActive: boolean = true;

  changeBoxColor(isSensorActive: boolean): void {
    this.isActive = isSensorActive;
  }
}
