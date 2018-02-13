import { Component, Input, Output, EventEmitter, OnInit, ViewChild } from '@angular/core';
import { NgbTabset, NgbTabChangeEvent } from '@ng-bootstrap/ng-bootstrap';

import { Project } from '../project';
import { TTest } from '../t-test';

@Component({
  selector: 't-test-project',
  templateUrl: './project.component.html',
  styleUrls: ['./project.component.css']
})
export class ProjectComponent implements OnInit {
  @Input() project: Project;
  @Input() name: string;
  @Output() projectChanged = new EventEmitter();
  selectedModel: TTest;

  @ViewChild('tabset') tabset: NgbTabset;

  ngOnInit(): void {
    this.activeModel = this.project.getModel(0);
  }

  changeOutput(value: string): void {
    this.project.updateModel(0, 'output', value).then(() => {
      this.projectChanged.emit();
    });
  }

  onTabChange(event: NgbTabChangeEvent): void {
    if (event.nextId === `t-test-project-${this.name}-add-model`) {
      this.addModel();
      event.preventDefault();
    } else {
      let md = event.nextId.match(/-model-(\d+)$/);
      if (md && md[1]) {
        this.activeModel = this.project.getModel(parseInt(md[1]));
      }
    }
  }

  addModel(): void {
    let model = this.activeModel.shallowClone();
    this.project.addModel(model).then(() => {
      this.projectChanged.emit();
      setTimeout(() => {
        this.tabset.select(`t-test-project-${this.name}-model-${this.project.models.length - 1}`);
      }, 1);
    });
  }

  removeModel(index: number): void {
    this.project.removeModel(index);
    this.projectChanged.emit();
  }

  onModelChanged(): void {
    this.projectChanged.emit();
  }

  trackByExtra(index: number, item: number): number {
    return index;
  }
}
