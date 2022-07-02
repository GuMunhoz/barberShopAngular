import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-confirmation-modal',
  templateUrl: './confirmation-modal.component.html',
  styleUrls: ['./confirmation-modal.component.scss']
})
export class ConfirmationModalComponent implements OnInit {
  chosenOption: string;
  options: string[] = ['Corte cabelo', 'Barba', 'Cabelo + Barba', 'Pezinho'];

  constructor() { }

  ngOnInit(): void {
  }

}
