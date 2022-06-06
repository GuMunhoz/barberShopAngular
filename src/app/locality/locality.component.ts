import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-locality',
  templateUrl: './locality.component.html',
  styleUrls: ['./locality.component.scss']
})
export class LocalityComponent implements OnInit {

  horarios : string[] = ['SEG DAS  13:00 ÀS 20:00','TER À SEXTA DAS 10:00 ÀS 20:00', 'SÁB DAS 10: 00 ÀS 18:00'];
  constructor() { }

  ngOnInit(): void {
  }

}
