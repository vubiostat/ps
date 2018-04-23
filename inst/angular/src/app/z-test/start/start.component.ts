import { Component, Input, Output, EventEmitter } from '@angular/core';

import { ZTest } from '../z-test';

@Component({
  selector: 'z-test-start',
  templateUrl: './start.component.html',
  styleUrls: ['./start.component.css']
})
export class StartComponent {
  @Input() model: ZTest;
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

  onSubmit(): void {
    this.onCalculate.emit();
  }
}
