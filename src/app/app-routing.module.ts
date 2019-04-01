import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { HomeComponent } from './home/home.component';
import { ComputerRecyclingComponent } from './computer-recycling/computer-recycling.component';
import { HardDriveCrushingComponent } from './hard-drive-crushing/hard-drive-crushing.component';
import { ContactComponent } from './contact/contact.component';
import { DataWipingComponent } from './data-wiping/data-wiping.component';

const routes: Routes = [
  { path: '', component: HomeComponent, data: {animation: 'home'}  },
  { path: 'about', component: AboutComponent, data: {animation: 'about'}  },
  { path: 'computer-recycling', component: ComputerRecyclingComponent, data: {animation: 'recycling'} },
  { path: 'onsite-crushing', component: HardDriveCrushingComponent, data: {animation: 'onsite'} },
  { path: 'offsite-wiping', component: DataWipingComponent, data: {animation: 'offsite'} },
  { path: 'contact', component: ContactComponent, data: {animation: 'contact'} },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    scrollPositionRestoration: 'enabled'
  })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
