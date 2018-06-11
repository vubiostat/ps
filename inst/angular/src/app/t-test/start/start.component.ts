import { Component, Input, Output, EventEmitter } from '@angular/core';

import { TTest, TTestKind } from '../t-test';

@Component({
  selector: 't-test-start',
  templateUrl: './start.component.html',
  styleUrls: ['./start.component.css']
})
export class StartComponent {
  @Input() model: TTest;
  @Output() onCalculate = new EventEmitter();
  @Output() onToggleHelp = new EventEmitter();

  constructor() {}

  toggleHelp(): void {
    this.onToggleHelp.emit();
  }

  needDelta(): boolean {
    return this.model.output !== 'delta' && this.model.output !== 'nByCI';
  }

  needPower(): boolean {
    return this.model.output !== 'power' && this.model.output !== 'nByCI';
  }

  needPowerOrDelta(): boolean {
    return this.model.output === 'nByCI';
  }

  needCI(): boolean {
    return this.model.output === 'nByCI';
  }

  needNOrCI(): boolean {
    return this.model.output !== 'n' && this.model.output !== 'nByCI';
  }

  needM(): boolean {
    return this.model.kind === TTestKind.Independent;
  }

  onSubmit(): void {
    this.onCalculate.emit();
  }
}
