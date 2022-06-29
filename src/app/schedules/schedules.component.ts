import { Component, OnInit } from '@angular/core';
import { DateAdapter } from '@angular/material/core';


export interface PeriodicElement {
  hour: string;
  // logo: any;
  nameBarber: string;
  // scheduleButton: any;
}
const ELEMENT_DATA: PeriodicElement[] = [
  {hour: '05/07/2022 09:00',  nameBarber: 'Bruno'},
  {hour: '05/07/2022 10:00',  nameBarber: 'Felipe'},
  {hour: '05/07/2022 11:00',  nameBarber: 'Bruno'},
  {hour: '05/07/2022 11:00',  nameBarber: 'Felie'},
  {hour: '05/07/2022 13:00',  nameBarber: 'Bruno'},
  {hour: '05/07/2022 14:00',  nameBarber: 'Felipe'},
  {hour: '05/07/2022 15:00',  nameBarber: 'Felipe'},
  {hour: '05/07/2022 16:00',  nameBarber: 'Bruno'},
  {hour: '05/07/2022 17:00',  nameBarber: 'Bruno'},
  {hour: '05/07/2022 18:00',  nameBarber: 'Felipe'},
  {hour: '05/07/2022 19:00',  nameBarber: 'Bruno'},

];
@Component({
  selector: 'app-schedules',
  templateUrl: './schedules.component.html',
  styleUrls: ['./schedules.component.scss']
})
export class SchedulesComponent implements OnInit {
  todayDate:Date = new Date();
  name: string;

  displayedColumns: string[] = ['hour', 'logo', 'nameBarber', 'scheduleButton'];
  dataSource = ELEMENT_DATA;

  myFilter = (d: Date | null): boolean => {
    const day = (d || new Date()).getDay();
    // Prevent Saturday and Sunday from being selected.
    return day !== 0;
  }
  constructor(private dateAdapter: DateAdapter<Date>) {
    this.dateAdapter.setLocale('pt-BR');
  }

  ngOnInit(): void {
  }

}
