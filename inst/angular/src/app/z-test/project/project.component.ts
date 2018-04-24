import { Component, Input, Output, EventEmitter, OnInit, ViewChild } from '@angular/core';
import { NgbTabset, NgbTabChangeEvent } from '@ng-bootstrap/ng-bootstrap';

import { PlotOptionsService } from '../../plot-options.service';
import { PaletteService } from '../../palette.service';
import { Project } from '../project';
import { ZTest } from '../z-test';

@Component({
  selector: 'z-test-project',
  templateUrl: './project.component.html',
  styleUrls: ['./project.component.css']
})
export class ProjectComponent implements OnInit {
  @Input() project: Project;
  @Input() name: string;
  @Output() projectChanged = new EventEmitter();
  selectedModel: ZTest;

  @ViewChild('tabset') tabset: NgbTabset;

  constructor(
    private plotOptions: PlotOptionsService,
    private palette: PaletteService
  ) { }

  ngOnInit(): void {
    this.selectedModel = this.project.getModel(this.project.selectedIndex);
  }

  changeOutput(value: string): void {
    this.project.updateModel(0, 'output', value).then(() => {
      this.projectChanged.emit();
    });
  }

  selectModel(index: number): void {
    this.project.selectedIndex = index;
    this.selectedModel = this.project.getModel(index);
    this.projectChanged.emit();
  }

  addModel(): void {
    let model = this.selectedModel.shallowClone();
    this.project.addModel(model).then(() => {
      this.project.selectedIndex = this.project.models.length - 1;
      this.projectChanged.emit();
    });
  }

  onModelRemove(index: number): void {
    this.removeModel(index);
  }

  removeModel(index: number): void {
    this.project.removeModel(index).then(() => {
      if (this.project.selectedIndex >= this.project.models.length) {
        this.project.selectedIndex--;
      }
      this.projectChanged.emit();
    });
  }

  onModelChanged(): void {
    this.projectChanged.emit();
  }

  trackByIndex(index: number, item: number): number {
    return index;
  }

  getColor(index: number): string {
    return this.palette.getColor(index, this.plotOptions.paletteTheme);
  }
}
