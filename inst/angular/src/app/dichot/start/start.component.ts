import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

import { Dichot } from '../dichot';

@Component({
  selector: 'dichot-start',
  templateUrl: './start.component.html',
  styleUrls: ['./start.component.css']
})
export class StartComponent implements OnInit {
  @Input() model: Dichot;
  @Output() onCalculate = new EventEmitter();
  @Output() onToggleHelp = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  onSubmit(): void {
    this.onCalculate.emit();
  }
}
