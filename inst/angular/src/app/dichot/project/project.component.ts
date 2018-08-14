import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

import { Project } from '../project';

@Component({
  selector: 'dichot-project',
  templateUrl: './project.component.html',
  styleUrls: ['./project.component.css']
})
export class ProjectComponent implements OnInit {
  @Input() project: Project;
  @Input() name: string;
  @Output() projectChanged = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }

  changeOutput(value: string): void {
    this.project.updateModel(0, 'output', value).subscribe(() => {
      this.projectChanged.emit();
    });
  }

  onModelChanged(): void {
  }
}
