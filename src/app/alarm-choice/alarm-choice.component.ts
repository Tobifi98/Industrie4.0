import { Component } from '@angular/core';
import { CurrentAlarmsComponent } from '../current-alarms/current-alarms.component';

@Component({
  selector: 'app-alarm-choice',
  templateUrl: './alarm-choice.component.html',
  styleUrls: ['./alarm-choice.component.css']
})
export class AlarmChoiceComponent {

constructor(private alarm: CurrentAlarmsComponent){}

  Paletalarm(){
    this.alarm.setError("Palete");
  }

}
