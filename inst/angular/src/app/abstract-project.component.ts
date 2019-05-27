import { Component, Output, EventEmitter } from '@angular/core';
import { AbstractProject } from './abstract-project';

@Component({ template: '' })
export class AbstractProjectComponent {
  @Output() projectChanged = new EventEmitter();
  @Output() projectSwitched = new EventEmitter();
}
