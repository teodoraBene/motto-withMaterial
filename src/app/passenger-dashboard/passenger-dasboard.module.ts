import {NgModule} from '@angular/core';
import {HttpClientModule} from '@angular/common/http';


import {CommonModule} from '@angular/common';

// containers
import {PassengersDashBoardComponent} from './containers/passenger-dashboard/passenger-dashboard.component';

// components
import {PassengerCountComponent} from './components/passenger-count/passenger-count.component';
import {PassengerDetailComponent} from './components/passenger-detail/passenger-detail.component';

// service
import {PassengerDashboardService} from './passenger-dashboard.service';

@NgModule({
  declarations:
    [
      PassengersDashBoardComponent,
      PassengerCountComponent,
      PassengerDetailComponent]
  ,
  exports: [
    PassengersDashBoardComponent
  ],
  imports: [
    CommonModule,
    HttpClientModule
  ],
  providers: [
    PassengerDashboardService
  ]
})
export class PassengerDashboardModule {
}
