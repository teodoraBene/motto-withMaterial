import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {AppComponent} from './app.component';
import {MDBBootstrapModule} from 'angular-bootstrap-md';
import {FirstTryComponent} from './first-try/first-try.component';
import {FormsModule} from '@angular/forms';
import {PassengersComponent} from './passengers/passengers.component';
import {PassengerDashboardModule} from './passenger-dashboard/passenger-dasboard.module';

import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryDataService } from './in-memory-data.service';


@NgModule({
  declarations: [
    AppComponent,
    FirstTryComponent,
    PassengersComponent
  ],
  imports: [
    // angular modules
    BrowserModule,
    CommonModule,
    MDBBootstrapModule.forRoot(),
    FormsModule,

    // custom modules
    PassengerDashboardModule,
    HttpClientInMemoryWebApiModule.forRoot(
      InMemoryDataService, { dataEncapsulation: false }
    )
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
