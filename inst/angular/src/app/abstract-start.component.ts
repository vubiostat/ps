import { Component, Output, EventEmitter } from '@angular/core';

@Component({ template: '' })
export class AbstractStartComponent {
  @Output() calculate = new EventEmitter();
  @Output() toggleHelp = new EventEmitter();
}
