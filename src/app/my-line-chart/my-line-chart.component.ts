import { Component, OnInit } from '@angular/core';
import { Chart } from 'angular-highcharts';
import { AlarmService } from '../services/alarm.service';
import { Alarm } from '../shared/models/alarm.model';
import { ApiService } from '../services/api.service';
import { SensorData } from '../shared/models/sensorData.model';
import { Observable } from 'rxjs';

export type XType =
  | 'bar'
  | 'areaspline'
  | 'pie'
  | 'abands'
  | 'ad'
  | 'ao'
  | 'apo'
  | 'arcdiagram'
  | 'area'
  | 'arearange'
  | 'areasplinerange'
  | 'aroon'
  | 'aroonoscillator'
  | 'atr'
  | 'bb'
  | 'bellcurve'
  | 'zigzag';
@Component({
  selector: 'app-my-line-chart',
  templateUrl: './my-line-chart.component.html',
  styleUrls: ['./my-line-chart.component.css'],
})
export class MyLineChartComponent implements OnInit {
  chartData: Chart[] = [];
  json = {
    sensors: [
      {
        sonsorName: 'Sensor1',
        name: 'line 1',
      }
    ],
  };
  // constructor(private apiService: ApiService) {}
  ngOnInit(): void {
    // this.apiService.getSensData().subscribe((data: SensorData[]) => {
    //   let obj = Object.assign({}, data);
    //   console.log(obj);
    // });
    // this.apiService.getAlarm().subscribe((data: Alarm) => {
    //   console.log(data);
    // });
    // this.apiService.getMQTT().subscribe((data: any) => {
    //   console.log(data);
    // });

    for (let data of this.json.sensors) {
      let lineChart = new Chart({
        chart: {
          height: 350,
          events: {
            load: function () {
              var series = this.series[0];
              setInterval(function () {
                var x = new Date().getTime(), // current time
                  y = Math.round(Math.random() * 100);
                series.addPoint([x, y], true, true);
              }, 3000);
            },
          },
        },

        title: {
          text: data.sonsorName,
        },
        credits: {
          enabled: false,
        },
        series: [
          {
            name: data.name,
            type: 'areaspline',
            data: (function () {
              // generate an array of random data
              var data = [],
                time = new Date().getTime(),
                i;

              for (i = -10; i <= 0; i += 1) {
                data.push([time + i * 1000, Math.round(Math.random() * 100)]);
              }
              return data;
            })(),
          },
        ],
      });
      this.chartData.push(lineChart);
    }
  }
}
