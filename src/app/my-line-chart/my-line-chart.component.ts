import { Component, OnInit } from '@angular/core';
import { Chart } from 'angular-highcharts';
import { AlarmService } from '../services/alarm.service';
import { Alarm } from '../shared/models/alarm.model';
import { ApiService } from '../services/api.service';
import { SensorData } from '../shared/models/sensorData.model';

@Component({
  selector: 'app-my-line-chart',
  templateUrl: './my-line-chart.component.html',
  styleUrls: ['./my-line-chart.component.css']
})
export class MyLineChartComponent implements OnInit{
  chartData:Chart[]=[];
  json={
    sensors:
    [
    {
      sonsorName: 'Sensor1',
      name: 'line 1',
      data: [1,2,3,8,5,6]
    },
    {
      sonsorName: 'Sensor2',
      name: 'line 2',
      data: [1,2,12,4,5,6]
    },
    {
      sonsorName: 'Sensor3',
      name: 'line 3',
      data: [1,2,3,24,5,6]
    }
  ]}
  constructor(private apiService: ApiService){}
  ngOnInit(): void {
    this.apiService.getSensData().subscribe((data:SensorData[]) =>{
      let obj = Object.assign({}, data)
      console.log(obj);
    })
    this.apiService.getAlarm().subscribe((data:Alarm) =>{
      console.log(data);
    })
    this.apiService.getMQTT().subscribe((data:any) => {
      console.log(data);
    })
    for(let data of this.json.sensors){
      let lineChart= new Chart({
        chart: {
          type: 'areaspline'
        },
        title: {
          text: data.sonsorName
        },
        credits: {
          enabled: false
        },
        series: [
          {
            name: data.name,
            type: 'areaspline',
            data: data.data
          }
        ]
      })
    this.chartData.push(lineChart);
    }
  }
}
