import { Component, OnInit, AfterContentInit } from '@angular/core';
import { faHdd, faCheckCircle, faTimesCircle } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-data-wiping',
  templateUrl: './data-wiping.component.html',
  styleUrls: ['./data-wiping.component.scss']
})
export class DataWipingComponent implements OnInit, AfterContentInit {
  // Font Awesome Icons
  faHdd = faHdd;
  faCheckCircle = faCheckCircle;
  faTimesCircle = faTimesCircle;

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
