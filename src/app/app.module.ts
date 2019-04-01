import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AngularMaterialModule } from './material.module';
import { AboutComponent } from './about/about.component';
import { HomeComponent } from './home/home.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ComputerRecyclingComponent } from './computer-recycling/computer-recycling.component';
import { FooterComponent } from './footer/footer.component';
import { HardDriveCrushingComponent } from './hard-drive-crushing/hard-drive-crushing.component';
import { ContactComponent } from './contact/contact.component';
import { DataWipingComponent } from './data-wiping/data-wiping.component';
import { NavbarComponent } from './navbar/navbar.component';

@NgModule({
   declarations: [
      AppComponent,
      AboutComponent,
      HomeComponent,
      ComputerRecyclingComponent,
      FooterComponent,
      HardDriveCrushingComponent,
      ContactComponent,
      DataWipingComponent,
      NavbarComponent
   ],
   imports: [
      BrowserModule,
      AppRoutingModule,
      BrowserAnimationsModule,
      AngularMaterialModule,
      FontAwesomeModule,
   ],
   providers: [],
   bootstrap: [
      AppComponent
   ]
})
export class AppModule { }
