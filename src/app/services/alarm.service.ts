import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Alarm } from '../shared/models/alarm.model';
import { Buffer } from 'buffer';

@Injectable({
  providedIn: 'root'
})
export class AlarmService {

  constructor(private http: HttpClient) { }
  
  getAlarm(): Observable<any> {   
    
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type':  'application/json',
        'Authorization': 'Basic ' + "tester:training"
      })
    };
    return this.http.get<Alarm>(
      'http://10.3.0.71:8080/mhubx-cc/module/juwi/action?page=Logic.Interface&name=getAlarms&system_id=cps1', httpOptions
    );
  }
}
