import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import * as stableSort from 'stable';
import * as d3 from 'd3';

import { Project } from '../project';
import { Dichot } from '../dichot';
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
    this.min = new Dichot(this.model);
    this.max = new Dichot(this.model);

    this.min.alpha = 0.01;
    this.max.alpha = 0.99;

    this.min.power = 0.01;
    this.max.power = 0.99;

    this.calculateSliderRange('n');
    this.calculateSliderRange('p0');
    this.calculateSliderRange('m');
    console.log('r:', this.model.r);
    if (typeof(this.model.r) === 'number') {
      this.calculateSliderRange('r');
    }
    //this.calculateSliderRange('delta');
    //this.calculateSliderRange('sigma');

    this.color = this.palette.getColor(this.index);
  }

  changeModel(key: string, value: any): void {
    this.project.updateModel(this.index, key, value).subscribe(() => {
      this.adjustMinMax();
      this.modelChanged.emit();
    });
  }

  isOutput(name: string): boolean {
    return this.model.output === name;
  }

  private onRemoveButtonClicked(): void {
    this.remove.emit();
  }

  private adjustMinMax(): void {
    if (this.model.n < this.min.n) {
      this.min.n = Math.floor(this.model.n);
    } else if (this.model.n > this.max.n) {
      this.max.n = Math.ceil(this.model.n);
    }
  }

  private calculateSliderRange(name: string): void {
    let value = this.model[name];
    let range = stableSort([value * 0.5, value * 1.5], d3.ascending);
    this.min[name] = range[0];
    this.max[name] = range[1];
  }
}
