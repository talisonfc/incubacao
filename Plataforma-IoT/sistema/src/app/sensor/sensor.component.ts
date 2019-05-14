import { Component, OnInit } from '@angular/core';
import {Sensor} from '../../model/sensor'
import {HttpClient} from '@angular/common/http'
import {Socket} from 'ng-socket-io'

@Component({
  selector: 'app-sensor',
  templateUrl: './sensor.component.html',
  styleUrls: ['./sensor.component.css']
})
export class SensorComponent implements OnInit {

  sensor: Sensor
  sensores: Array<Sensor>

  constructor(private http: HttpClient /*, private socket: Socket*/) {
    this.sensores = new Array()
    this.sensor = new Sensor()
  }

  ngOnInit() {
    this.http.get<Sensor[]>('http://127.0.0.1:5000/sensores').subscribe(res=>{
      this.sensores = res;
    })
  }

  cadastrar(){
    this.http.post<Sensor>("http://127.0.0.1:5000/sensor", this.sensor).subscribe(res=>{
      this.sensores.push(res)
      this.sensor = new Sensor();
    })
  }

  limpar(){
    this.sensor = new Sensor()
  }

  /*
  receive(){
    return this.socket.fromEvent("change-value").subscribe(data=>{
      console.log(data)
    })
  }
  */
}
