import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  openList: boolean = false;
  constructor() { }

  ngOnInit(): void {
  }

openSetting(){
  this.openList = !this.openList;
}
}
