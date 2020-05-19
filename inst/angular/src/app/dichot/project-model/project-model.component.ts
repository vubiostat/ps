import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import * as stableSort from 'stable';
import * as d3 from 'd3';

import { Project } from '../project';
import { Dichot, DichotMatched, DichotExpressed } from '../dichot';
import { PaletteService } from '../../palette.service';

@Component({
  selector: 'dichot-project-model',
  templateUrl: './project-model.component.html',
  styleUrls: ['./project-model.component.css']
})
export class ProjectModelComponent implements OnInit {
  @Input() project: Project;
  @Input() index: number;
  @Output() modelChanged = new EventEmitter();
  @Output() remove = new EventEmitter();

  model: Dichot;
  min: Dichot;
  max: Dichot;
  color: string;

  constructor(
    private palette: PaletteService
  ) { }

  ngOnInit(): void {
    this.model = this.project.getModel(this.index);
    this.color = this.palette.getColor(this.index);
    this.initializeSliderRanges();
  }

  changeModel(key: string, value: any): void {
    this.project.updateModel(this.index, key, value).subscribe(() => {
      if (key == 'alpha') {
        this.calculateAlphaRange();
      }
      this.updateSliderRanges();
      this.modelChanged.emit();
    });
  }

  isOutput(name: string): boolean {
    return this.model.output === name;
  }

  private onRemoveButtonClicked(): void {
    this.remove.emit();
  }

  private calculateAlphaRange(): void {
    let pow = Math.floor(Math.log10(this.model.alpha))
    if (pow > -2) {
      pow = -2;
    }
    this.min.alpha = Math.pow(10, pow);
    this.max.alpha = 1 - this.min.alpha;
  }

  private initializeSliderRanges(): void {
    this.min = new Dichot(this.model);
    this.max = new Dichot(this.model);

    this.calculateAlphaRange();

    this.min.power = 0.01;
    this.max.power = 0.99;

    this.initializeSliderRange('n');
    this.initializeSliderRange('p0');
    this.initializeSliderRange('m');

    if (this.model.matched === DichotMatched.Matched) {
      this.initializeSliderRange('phi');
      this.initializeSliderRange('psi');
    } else if (this.model.matched === DichotMatched.Independent) {
      if (this.model.expressed === DichotExpressed.TwoProportions) {
        this.initializeSliderRange('p1');
      } else if (this.model.expressed === DichotExpressed.RelativeRisk) {
        this.initializeSliderRange('r');
      } else if (this.model.expressed === DichotExpressed.OddsRatio) {
        this.initializeSliderRange('psi');
      }
    }
  }

  private initializeSliderRange(name: string): void {
    let value = this.model[name];
    let range = stableSort([value * 0.5, value * 1.5], d3.ascending);
    this.min[name] = range[0];
    this.max[name] = range[1];
  }

  private updateSliderRanges(): void {
    this.updateSliderRange('n');
    this.updateSliderRange('p0');
    this.updateSliderRange('m');

    if (this.model.matched === DichotMatched.Matched) {
      this.updateSliderRange('phi');
      this.updateSliderRange('psi');
    } else if (this.model.matched === DichotMatched.Independent) {
      if (this.model.expressed === DichotExpressed.TwoProportions) {
        this.updateSliderRange('p1');
      } else if (this.model.expressed === DichotExpressed.RelativeRisk) {
        this.updateSliderRange('r');
      } else if (this.model.expressed === DichotExpressed.OddsRatio) {
        this.updateSliderRange('psi');
      }
    }
  }

  private updateSliderRange(name: string): void {
    let value = this.model[name];
    if (value < this.min[name]) {
      this.min[name] = Math.floor(value);
    } else if (value > this.max[name]) {
      this.max[name] = Math.ceil(value);
    }
  }
}
