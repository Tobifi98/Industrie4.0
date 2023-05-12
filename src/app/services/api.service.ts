import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Alarm } from '../shared/models/alarm.model';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  constructor(private http: HttpClient) {}
  getSensData(): Observable<any> {
    return this.http.get<any>('http://127.0.0.1:5000/restData');
  }
  getAlarm(): Observable<any> {
    return this.http.get<any>('http://127.0.0.1:5000/getAlarms');
  }
  getMQTT(): Observable<any> {
    return this.http.get<any>('http://127.0.0.1:5000/mqttData');
  }

}
