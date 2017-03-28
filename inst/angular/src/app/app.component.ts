import { Component } from '@angular/core';

import { TTest } from './t-test';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'PS: Power and Sample Size Calculation';
  ttest = new TTest();
}
