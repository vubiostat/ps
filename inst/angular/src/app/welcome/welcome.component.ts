import { Component, OnInit } from '@angular/core';

// globals from webpack
declare var __COMMITHASH__: string;
declare var __BUILDTIMESTAMP__: string;

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css']
})
export class WelcomeComponent implements OnInit {
  commitHash = __COMMITHASH__.substr(0, 7);
  buildTimestamp = __BUILDTIMESTAMP__;

  constructor() { }

  ngOnInit() {
  }

}
