import { Component, OnInit, AfterContentInit } from '@angular/core';
import { faRecycle, faAngleDoubleRight } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-computer-recycling',
  templateUrl: './computer-recycling.component.html',
  styleUrls: ['./computer-recycling.component.scss']
})
export class ComputerRecyclingComponent implements OnInit, AfterContentInit {
  // Font Awesome Icons
  faRecycle = faRecycle;
  faAngleDoubleRight = faAngleDoubleRight;

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
