import { Component, OnInit } from '@angular/core';
import { DateAdapter } from '@angular/material/core';
import { GenericModalModel } from '../shared/model/generic-modal.model';
import { MatDialog } from '@angular/material/dialog';

import { GenericModalComponent } from '../shared/generic-modal/generic-modal.component';
import { ConfirmationModalComponent } from './../shared/modals/schedules/confirmation-modal/confirmation-modal.component';

export interface PeriodicElement {
  hour: string;
  // logo: any;
  nameBarber: string;
  // scheduleButton: any;
}
const ELEMENT_DATA: PeriodicElement[] = [
  { hour: '05/07/2022 09:00', nameBarber: 'Bruno' },
  { hour: '05/07/2022 10:00', nameBarber: 'Felipe' },
  { hour: '05/07/2022 11:00', nameBarber: 'Bruno' },
  { hour: '05/07/2022 11:00', nameBarber: 'Felipe' },
  { hour: '05/07/2022 13:00', nameBarber: 'Bruno' },
  { hour: '05/07/2022 14:00', nameBarber: 'Felipe' },
  { hour: '05/07/2022 15:00', nameBarber: 'Felipe' },
  { hour: '05/07/2022 16:00', nameBarber: 'Bruno' },
  { hour: '05/07/2022 17:00', nameBarber: 'Bruno' },
  { hour: '05/07/2022 18:00', nameBarber: 'Felipe' },
  { hour: '05/07/2022 19:00', nameBarber: 'Bruno' },
];
@Component({
  selector: 'app-schedules',
  templateUrl: './schedules.component.html',
  styleUrls: ['./schedules.component.scss'],
})
export class SchedulesComponent implements OnInit {
  todayDate: Date = new Date();
  name: string;

  displayedColumns: string[] = ['hour', 'logo', 'nameBarber', 'scheduleButton'];
  dataSource = ELEMENT_DATA;

  myFilter = (d: Date | null): boolean => {
    const day = (d || new Date()).getDay();
    return day !== 0;
  };
  constructor(
    private dateAdapter: DateAdapter<Date>,
    public confirmationDialog: MatDialog,
    ) {
    this.dateAdapter.setLocale('pt-BR');
  }

  ngOnInit(): void {}

  openModal(): void {
    const dataDialog: GenericModalModel = {
      error: false,
      title: "Confirmar agendamento",
      content: {
        text: "",
        simple: "",
        complex: {
          component: ConfirmationModalComponent,
          params: null,
        },
      },
      buttons: {
        confirm: {
          visible: true,
          caption: "Confirmar",
          action: { confirm: true },
          disabled: false,
        },
        cancel: {
          visible: true,
          caption: "Cancelar",
          action: null,
        },
        delete: {
          visible: false,
          caption: "",
          action: {},
        },
        save: {
          visible: false,
          caption: "",
          action: {},
        },
      },
      async: {
        action: null,
      },
    };
    const dialogRef = this.confirmationDialog.open(GenericModalComponent, {
      width: "450px",
      data: dataDialog,
    });

    dialogRef.afterClosed().subscribe((result) => {
      if (result && result.confirm) {

      }
    });
  }

}
