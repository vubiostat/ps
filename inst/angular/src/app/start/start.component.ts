import { Component, Input, Output, EventEmitter } from '@angular/core';

import { TTest } from '../t-test';

@Component({
  selector: 'app-start',
  templateUrl: './start.component.html',
  styleUrls: ['./start.component.css']
})
export class StartComponent {
  @Input() model: TTest;
  @Output() onCalculate = new EventEmitter();
  @Output() onOpenHelp = new EventEmitter();

  constructor() {}

  openHelp(): void {
    this.onOpenHelp.emit();
  }

  onSubmit(): void {
    this.onCalculate.emit();
  }
}
