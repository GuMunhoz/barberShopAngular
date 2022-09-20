import { Component, ElementRef, HostListener, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  openList: boolean = false;
  constructor(private elem: ElementRef) { }

  ngOnInit(): void {
  }

openSetting(){
  this.openList = !this.openList;
}
@HostListener('document:click', ['$event'])
  DocumentClick(event: Event) {
    if (this.elem.nativeElement.contains(event.target)) this.openList = false;
  }

}
