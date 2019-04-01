import { Component, OnInit, AfterContentInit } from '@angular/core';
import { faPhone, faEnvelope, faRecycle, faBuilding } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit, AfterContentInit {
  // Font Awesome Icons
  faPhone = faPhone;
  faEnvelope = faEnvelope;
  faRecycle = faRecycle;
  faBuilding = faBuilding;

  // Other
  isLoading = false;
  mode = 'indeterminate';

  constructor() { }

  ngOnInit() {
  }

  ngAfterContentInit() {
    setTimeout(() => {
      this.isLoading = true;
      this.mode = 'determinate';
    }, 375);
  }

}
