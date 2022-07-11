import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { GenericModalModel } from 'src/app/shared/model/generic-modal.model';
import { GenericModalComponent } from './../../shared/generic-modal/generic-modal.component';
import { ListAdmin } from './list-admin';
import { ListClient } from './list-client';

const ELEMENT_DATA_CLIENT: ListClient[] = [
  { hour: '05/07/2022 09:00', nameBarber: 'Bruno' ,service: 'Corte + barba',status:'pending'},
  { hour: '15/06/2022 16:00', nameBarber: 'Bruno', service: 'Corte + barba' , status:'done'},
  { hour: '02/06/2022 11:00', nameBarber: 'Felipe',service:'Barba' , status: 'done'},
];


const ELEMENT_DATA_ADMIN: ListAdmin[] = [
  { hour: '05/07/2022 09:00', nameClient: 'Osmar Oliveira', emailClient:'osmar@email.com', service:'Cabelo + Barba'},
  { hour: '05/07/2022 10:00', nameClient: 'João Paulo',emailClient:'jp@email.com',service:'Cabelo + Barba' },
  { hour: '05/07/2022 11:00', nameClient: 'Bruno Pacheco',emailClient:'pacheco@email.com' , service : 'Barba'},
  { hour: '05/07/2022 11:00', nameClient: 'Johnatan Silva',emailClient:'john@email.com', service: 'Cabelo + Barba' },
  { hour: '05/07/2022 13:00', nameClient: 'Gustavo Alves',emailClient:'galves@email.com', service: 'Cabelo' },
];
@Component({
  selector: 'app-my-schedules',
  templateUrl: './my-schedules.component.html',
  styleUrls: ['./my-schedules.component.scss']
})
export class MySchedulesComponent implements OnInit {
  clientScreen: boolean = true;
  displayedColumns: string[] = ['hour', 'nameBarber','service','status',];
  displayedColumns2: string [] = ['hour','nameClient','emailClient','service',];
  dataSourceClient = ELEMENT_DATA_CLIENT;
  dataSourceAdmin = ELEMENT_DATA_ADMIN;

  constructor(
    public confirmationDialog: MatDialog,
  ) { }

  ngOnInit(): void {
  }

  deleteSchedule(): void {
    const dataDialog: GenericModalModel = {
      error: false,
      title: "Excluir agendamento",
      content: {
        text: "Tem certeza que deseja excluir o agendamento?",
        simple: "",
        complex: {
          component: null,
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
      width: "400px",
      data: dataDialog,
    });

    dialogRef.afterClosed().subscribe((result) => {
      if (result && result.confirm) {

      }
    });
  }


  toogleTemplate() {
    this.clientScreen = !this.clientScreen;
  }

}
