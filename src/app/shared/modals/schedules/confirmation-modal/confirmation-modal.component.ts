import { Component, OnInit} from '@angular/core';
import { GenericModalComponent } from './../../../generic-modal/generic-modal.component';

@Component({
  selector: 'app-confirmation-modal',
  templateUrl: './confirmation-modal.component.html',
  styleUrls: ['./confirmation-modal.component.scss']
})
export class ConfirmationModalComponent implements OnInit {
  dataModal : GenericModalComponent = null;
  chosenOption: string;
  options: string[] = ['Corte cabelo', 'Barba', 'Cabelo + Barba', 'Pezinho'];

  constructor() { }

  ngOnInit(): void {
  }


  // checked() {
  //   let btnSave: HTMLElement = this.dataModal.saveButton.nativeElement;
  //   if (btnSave) {
  //     if (10 <5 ) {
  //       btnSave.classList.add("disabled");
  //     } else {
  //       btnSave.classList.remove("disabled");
  //     }
  //   }
  // }

}
