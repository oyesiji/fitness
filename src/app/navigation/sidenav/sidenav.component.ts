import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { AuthService } from 'src/app/auth/auth.service';

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.css']
})
export class SidenavComponent implements OnInit {
  @Output() closeNav = new EventEmitter<void>();

  constructor(private authService:AuthService) { }

  ngOnInit() {
  }

  onClose(){
    this.closeNav.emit();
  }

  onLogout(){
    this.authService.logout();
  }

}
