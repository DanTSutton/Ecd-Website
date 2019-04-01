import { Component, OnInit, AfterContentInit } from '@angular/core';
import { faHdd, faCheckCircle } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-hard-drive-crushing',
  templateUrl: './hard-drive-crushing.component.html',
  styleUrls: ['./hard-drive-crushing.component.scss']
})
export class HardDriveCrushingComponent implements OnInit, AfterContentInit {
  // Font Awesome Icons
  faHdd = faHdd;
  faCheckCircle = faCheckCircle;

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
