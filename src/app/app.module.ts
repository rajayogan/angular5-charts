import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

//Material design
import { MatSelectModule, MatButtonModule, MatRadioModule } from '@angular/material';


import { AppComponent } from './app.component';

//AngularFire2
import { AngularFireModule} from 'angularfire2';
import { AngularFirestoreModule} from 'angularfire2/firestore';

//Firebase config
import { environment } from '../environments/environment';

//service
import { VoteService } from './vote.service';

//Ngx-Charts
import {NgxChartsModule} from '@swimlane/ngx-charts';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    MatSelectModule,
    MatButtonModule,
    AngularFireModule.initializeApp(environment.config),
    AngularFirestoreModule,
    MatRadioModule,
    NgxChartsModule
  ],
  providers: [
    VoteService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
