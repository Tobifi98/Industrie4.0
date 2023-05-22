import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

const API_URL = 'https://example.com/api/alarms';

@Component({
  selector: 'app-current-alarms',
  templateUrl: './current-alarms.component.html',
  styleUrls: ['./current-alarms.component.css']
})
export class CurrentAlarmsComponent implements OnInit {
  alarms: any[] = [];

  constructor(private http: HttpClient) { }

  ngOnInit() {
    this.http.get<any[]>(API_URL).subscribe(data => {
      this.alarms = data;
    });
  }
}



