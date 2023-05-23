import { Component, Injectable } from '@angular/core';
import {ScrollingModule} from '@angular/cdk/scrolling';

@Component({
  selector: 'app-current-alarms',
  templateUrl: './current-alarms.component.html',
  styleUrls: ['./current-alarms.component.css']
})
@Injectable({
  providedIn: 'root'
})

export class CurrentAlarmsComponent  {

  public _reload = true;

 reload() {
    setTimeout(() => this._reload = false);
    setTimeout(() => this._reload = true);
}

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
        { code: '130', msg: 'Test 1 füllstand ist leider leer deshalb sollt nach bei gelegenheit aufgefüllt werden' },
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

  setError(modID: string){
    this.alarmList.push({
      module_id: modID,
      errors: [
        { code: '130', msg: 'Test 1' },
        { code: '131', msg: 'Test 2' },
  
      ]
    });
    console.log(this.alarmList)
  }
}



