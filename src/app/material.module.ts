import { NgModule } from '@angular/core';
import {MatButtonModule, MatCheckboxModule, MatCardModule, MatToolbarModule, MatMenuModule, MatProgressBarModule} from '@angular/material';



@NgModule({
    imports: [
        MatButtonModule,
        MatCheckboxModule,
        MatCardModule,
        MatToolbarModule,
        MatMenuModule,
        MatProgressBarModule
    ],
    exports: [
        MatButtonModule,
        MatCheckboxModule,
        MatCardModule,
        MatToolbarModule,
        MatMenuModule,
        MatProgressBarModule,
    ],

})
export class AngularMaterialModule { }
