import { Component, Input, Output, OnChanges, SimpleChanges, EventEmitter } from '@angular/core';
import { Subscription } from 'rxjs/Subscription';

import { Project } from '../project';
import { TTest } from '../t-test';
import { PlotOptionsService } from '../plot-options.service';

@Component({
  selector: 't-test-plot-options',
  templateUrl: './plot-options.component.html',
  styleUrls: ['./plot-options.component.css']
})
export class PlotOptionsComponent implements OnChanges {
  @Input('project') project: Project;
  @Output() optionsChanged = new EventEmitter();
  model: TTest;

  constructor(private plotOptions: PlotOptionsService) {}

  ngOnChanges(changes: SimpleChanges): void {
    if (this.project) {
      this.model = this.project.getModel(0);
    }
  }

  reset(): void {
    this.plotOptions.reset();
    this.project.calculateRanges();
  }

  changeAttribute(name: string, value: any): void {
    this.plotOptions[name] = value;
    this.optionsChanged.emit();
  }

  changeRange(name: string, which: string, value: number): void {
    this.project[`${name}Range`][which] = value;
    this.optionsChanged.emit();
  }
}
