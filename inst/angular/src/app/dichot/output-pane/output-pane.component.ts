import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

import { Project } from '../project';

@Component({
  selector: 'dichot-output-pane',
  templateUrl: './output-pane.component.html',
  styleUrls: ['./output-pane.component.css']
})
export class OutputPaneComponent implements OnInit {
  @Input() project: Project;
  @Input('hover-disabled') hoverDisabled = false;
  @Output() modelChanged = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  resize(): void {
  }

  updateProject(): void {
  }

  redrawPlots(): void {
  }
}
