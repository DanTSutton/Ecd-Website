import { Component, OnInit } from '@angular/core';
import { faDesktop, faPhone, faEnvelope, faRecycle, faBuilding } from '@fortawesome/free-solid-svg-icons';
import { faLinkedin } from '@fortawesome/free-brands-svg-icons';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {
  // Font Awesome Icons
  faDesktop = faDesktop;
  faPhone = faPhone;
  faEnvelope = faEnvelope;
  faRecycle = faRecycle;
  faBuilding = faBuilding;
  faLinkedin = faLinkedin;

  constructor() { }

  ngOnInit() {
  }

}
