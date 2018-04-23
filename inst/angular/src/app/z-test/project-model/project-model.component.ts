import { Component, Input, Output, OnInit, EventEmitter } from '@angular/core';

import { PlotOptionsService } from '../plot-options.service';
import { PaletteService } from '../../palette.service';
import { ZTest } from '../z-test';
import { Project } from '../project';

import * as d3 from 'd3';
import * as stableSort from 'stable';

@Component({
  selector: 'z-test-project-model',
  templateUrl: './project-model.component.html',
  styleUrls: ['./project-model.component.css']
})
export class ProjectModelComponent implements OnInit {
  @Input() project: Project;
  @Input() index: number;
  @Output() modelChanged = new EventEmitter();
  @Output() remove = new EventEmitter();

  model: ZTest;
  min: ZTest;
  max: ZTest;
  color: string;

  constructor(
    private plotOptions: PlotOptionsService,
    private palette: PaletteService
  ) { }

  ngOnInit(): void {
    this.model = this.project.getModel(this.index);
    this.min = new ZTest(this.model);
    this.max = new ZTest(this.model);

    this.min.alpha = 0.01;
    this.max.alpha = 0.99;

    this.min.power = 0.01;
    this.max.power = 0.99;

    this.calculateSliderRange('n');
    this.calculateSliderRange('ci');
    this.calculateSliderRange('delta');
    this.calculateSliderRange('sigma');

    this.color = this.palette.getColor(this.index, this.plotOptions.paletteTheme);
  }

  private onRemoveButtonClicked(): void {
    this.remove.emit();
  }

  private isOutput(name: string): boolean {
    return this.model.output === name;
  }

  private changeModel(key: string, value: any): void {
    this.project.updateModel(this.index, key, value).then(() => {
      this.adjustMinMax();
      this.modelChanged.emit();
    });
  }

  private adjustMinMax(): void {
    if (this.model.sigma < this.min.sigma) {
      this.min.sigma = Math.floor(this.model.sigma);
    } else if (this.model.sigma > this.max.sigma) {
      this.max.sigma = Math.ceil(this.model.sigma);
    }

    if (this.model.delta < this.min.delta) {
      this.min.delta = Math.floor(this.model.delta);
    } else if (this.model.delta > this.max.delta) {
      this.max.delta = Math.ceil(this.model.delta);
    }

    if (this.model.n < this.min.n) {
      this.min.n = Math.floor(this.model.n);
    } else if (this.model.n > this.max.n) {
      this.max.n = Math.ceil(this.model.n);
    }

    if (this.model.ci < this.min.ci) {
      this.min.ci = Math.floor(this.model.ci);
    } else if (this.model.ci > this.max.ci) {
      this.max.ci = Math.ceil(this.model.ci);
    }
  }

  private calculateSliderRange(name: string): void {
    let value = this.model[name];
    let range = stableSort([value * 0.5, value * 1.5], d3.ascending);
    this.min[name] = range[0];
    this.max[name] = range[1];
  }
}
