import { Component } from '@angular/core';
import {ScrollingModule} from '@angular/cdk/scrolling';

@Component({
  selector: 'app-current-alarms',
  templateUrl: './current-alarms.component.html',
  styleUrls: ['./current-alarms.component.css']
})

export class CurrentAlarmsComponent  {
  alarmList: any[] = [
    {
      module_id: 'PR',
      errors: [
        { code: '130', msg: 'Test 1' },
        { code: '131', msg: 'Test 2' },
        // Add more error objects as needed
      ]
    },
    {
      module_id: 'PR',
      errors: [
        { code: '130', msg: 'Test 1' },
        { code: '131', msg: 'Test 2' },
        // Add more error objects as needed
      ]
    },
    {
      module_id: 'PR',
      errors: [
        { code: '130', msg: 'Test 1' },
        { code: '131', msg: 'Test 2' },
        // Add more error objects as needed
      ]
    },
    {
      module_id: 'PR',
      errors: [
        { code: '130', msg: 'Test 1' },
        { code: '131', msg: 'Test 2' },
        // Add more error objects as needed
      ]
    },
    {
      module_id: 'PR',
      errors: [
        { code: '130', msg: 'Test 1' },
        { code: '131', msg: 'Test 2' },
        // Add more error objects as needed
      ]
    },
    {
      module_id: 'PR',
      errors: [
        { code: '130', msg: 'Test 1' },
        { code: '131', msg: 'Test 2' },
        // Add more error objects as needed
      ]
    }
    // Add more alarm objects as needed
  ];
}



