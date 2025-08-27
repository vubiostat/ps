import { Component, OnInit } from '@angular/core';
import { commitHash, buildTimestamp } from '../version';

@Component({
    selector: 'app-welcome',
    templateUrl: './welcome.component.html',
    styleUrls: ['./welcome.component.css'],
    standalone: false
})
export class WelcomeComponent implements OnInit {
  commitHash = commitHash.substr(0, 7);
  buildTimestamp = buildTimestamp;

  constructor() { }

  ngOnInit() {
  }

}
