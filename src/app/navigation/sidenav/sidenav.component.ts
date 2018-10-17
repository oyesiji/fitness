import { Component, OnInit, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.css']
})
export class SidenavComponent implements OnInit {
  @Output() closeNav = new EventEmitter<void>();

  constructor() { }

  ngOnInit() {
  }

  onClose(){
    this.closeNav.emit();
  }

}
