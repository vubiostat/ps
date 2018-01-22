import { Component, Input, Output, EventEmitter, OnInit } from '@angular/core';

import { Project } from '../project';
import { TTest } from '../t-test';
import { PlotOptionsService } from '../plot-options.service';
import { PaletteService } from '../palette.service';

@Component({
  selector: 't-test-project',
  templateUrl: './project.component.html',
  styleUrls: ['./project.component.css']
})
export class ProjectComponent implements OnInit {
  @Input() project: Project;
  @Output() modelChanged = new EventEmitter();

  model: TTest;
  min: TTest;
  max: TTest;

  constructor(
    private plotOptions: PlotOptionsService,
    private palette: PaletteService
  ) { }

  ngOnInit(): void {
    this.model = this.project.getModel(0);

    this.min = new TTest(this.model);
    this.max = new TTest(this.model);

    this.min.alpha = 0.01;
    this.max.alpha = 0.99;

    this.min.power = 0.01;
    this.max.power = 0.99;

    this.calculateSliderRange('n');
    this.calculateSliderRange('ci');
    this.calculateSliderRange('delta');
    this.calculateSliderRange('sigma');
  }

  isOutput(name: string): boolean {
    return this.model.output === name;
  }

  canAdd(name: string): boolean {
    return this.model.output !== name &&
      (this.project.extraName === undefined || this.project.extraName === name);
  }

  getColor(index: number): string {
    return this.palette.getColor(
      this.project.modelCount() - 1 - index,
      this.plotOptions.paletteTheme
    );
  }

  addInput(name: any): void {
    if (this.project.extraName && this.project.extraName != name) {
      throw new Error("extra attributes must be mutually exclusive");
    }
    this.project.extraName = name;

    let model = this.model.shallowClone();
    this.project.addModel(model).then(() => {
      this.modelChanged.emit();
    });
  }

  removeInput(index: number): void {
    this.project.removeModel(index);
    if (this.project.modelCount() == 1) {
      this.project.extraName = undefined;
    }
    this.modelChanged.emit();
  }

  trackByExtra(index: number, item: number): number {
    return index;
  }

  private calculateSliderRange(name: string): void {
    let value = this.model[name];
    let range = [value * 0.5, value * 1.5].sort((a, b) => a - b);
    this.min[name] = range[0];
    this.max[name] = range[1];
  }

  private changeModel(index: number, key: string, value: any): void {
    this.project.updateModel(index, key, value).then(() => {
      this.adjustMinMax(index);
      this.modelChanged.emit();
    });
  }

  private adjustMinMax(index: number): void {
    let model = this.project.getModel(index);
    if (model.sigma < this.min.sigma) {
      this.min.sigma = Math.floor(model.sigma);
    } else if (model.sigma > this.max.sigma) {
      this.max.sigma = Math.ceil(model.sigma);
    }

    if (model.delta < this.min.delta) {
      this.min.delta = Math.floor(model.delta);
    } else if (model.delta > this.max.delta) {
      this.max.delta = Math.ceil(model.delta);
    }

    if (model.n < this.min.n) {
      this.min.n = Math.floor(model.n);
    } else if (model.n > this.max.n) {
      this.max.n = Math.ceil(model.n);
    }

    if (model.ci < this.min.ci) {
      this.min.ci = Math.floor(model.ci);
    } else if (model.ci > this.max.ci) {
      this.max.ci = Math.ceil(model.ci);
    }
  }
}
