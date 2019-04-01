import { Component, OnInit, AfterContentInit } from '@angular/core';
import { faDesktop, faTv, faLaptop, faServer, faTablet, faAngleDoubleRight,
faKeyboard, faMousePointer, faPlug, faEthernet, faUpload, faMicrochip,
faCalendarCheck, faTruck, faHdd, faFilePdf, faAngleRight,
faPhone, faEnvelope, faRecycle, faBuilding} from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit, AfterContentInit {
  // Font Awesome Icons
  faDesktop = faDesktop;
  faTv = faTv;
  faLaptop = faLaptop;
  faServer = faServer;
  faTablet = faTablet;
  faKeyboard = faKeyboard;
  faMousePointer = faMousePointer;
  faPlug = faPlug;
  faEthernet = faEthernet;
  faUpload = faUpload;
  faAngleDoubleRight = faAngleDoubleRight;
  faMicrochip = faMicrochip;
  faCalendarCheck = faCalendarCheck;
  faTruck = faTruck;
  faHdd = faHdd;
  faFilePdf = faFilePdf;
  faAngleRight = faAngleRight;
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
