import { Component, OnInit } from '@angular/core';

export interface PeriodicElement {
  hour: string;
  nameBarber: string;
  service: string;
  status: string;
}
const ELEMENT_DATA: PeriodicElement[] = [
  { hour: '05/07/2022 09:00', nameBarber: 'Bruno' ,service: 'Corte + barba',status:'pending'},
  { hour: '15/06/2022 16:00', nameBarber: 'Bruno', service: 'Corte + barba' , status:'done'},
  { hour: '02/06/2022 11:00', nameBarber: 'Felipe',service:'Barba' , status: 'done'},
  { hour: '02/06/2022 11:00', nameBarber: 'Felipe',service:'Barba' , status: 'done'},
  { hour: '02/06/2022 11:00', nameBarber: 'Felipe',service:'Barba' , status: 'done'},
  { hour: '02/06/2022 11:00', nameBarber: 'Felipe',service:'Barba' , status: 'done'},
  { hour: '02/06/2022 11:00', nameBarber: 'Felipe',service:'Barba' , status: 'done'},
  { hour: '02/06/2022 11:00', nameBarber: 'Felipe',service:'Barba' , status: 'done'},
  { hour: '02/06/2022 11:00', nameBarber: 'Felipe',service:'Barba' , status: 'done'},
];

@Component({
  selector: 'app-my-schedules',
  templateUrl: './my-schedules.component.html',
  styleUrls: ['./my-schedules.component.scss']
})
export class MySchedulesComponent implements OnInit {

  displayedColumns: string[] = ['hour', 'nameBarber','service','status'];
  dataSource = ELEMENT_DATA;
  constructor() { }

  ngOnInit(): void {
  }

}
