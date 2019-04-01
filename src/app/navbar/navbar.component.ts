import { Component, OnInit } from '@angular/core';
import { faRecycle, faHdd, faHammer } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
  // Font Awesome Icons
  faRecycle = faRecycle;
  faHdd = faHdd;
  faHammer = faHammer;

  // Other
  navbarOpen = false;

  constructor() { }

  ngOnInit() {
  }

  toggleNavbar() {
    this.navbarOpen = !this.navbarOpen;
  }

}
