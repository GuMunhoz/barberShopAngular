import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss'],
})
export class AdminComponent implements OnInit {
  containers: object [] = [{ containerTitle: 'Dados pessoais' },{containerTitle: 'Alterar senha'}];
  constructor() {}

  ngOnInit(): void {
    console.log(this.containers);
  }

  getNavigate() {
    if (this.containers[0]) {
      console.log('Dados pessoais')
    }
    // if(this.containers[1]) {
    //   console.log('Alterar senha')
    // }
  }
}
