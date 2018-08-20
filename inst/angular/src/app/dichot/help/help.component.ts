import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'dichot-help',
  templateUrl: './help.component.html',
  styleUrls: ['./help.component.css']
})
export class HelpComponent implements OnInit {
  @Input() topic: string;

  constructor() { }

  ngOnInit() {
  }

}
