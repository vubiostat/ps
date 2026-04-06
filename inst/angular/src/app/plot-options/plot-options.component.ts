import { Component, Input, Output, OnInit, OnChanges, SimpleChanges, EventEmitter } from '@angular/core';
import { Observable, Subject, Subscription, merge } from 'rxjs';
import { debounceTime } from 'rxjs/operators';

import { AbstractProject, FixedPSpace } from '../abstract-project';
import { PlotOptionsService } from '../plot-options.service';
import { Range } from '../range';

enum ProjectChangeType {
  pointsPerPlot = "pointsPerPlot", fixedPSpace = "fixedPSpace",
  customRanges = "customRanges", topYRange = "topYRange",
  topLeftXRange = "topLeftXRange", topRightXRange = "topRightXRange",
  bottomXRange = "bottomXRange"
}

enum RangeType {
  min = "min", max = "max"
}

@Component({
    selector: 'app-plot-options',
    templateUrl: './plot-options.component.html',
    styleUrls: ['./plot-options.component.css'],
    standalone: false
})
export class PlotOptionsComponent implements OnInit, OnChanges {
  @Input('project') project: AbstractProject;
  @Output() optionChanged = new EventEmitter();
  @Output() projectChanged = new EventEmitter();
  @Output() reset = new EventEmitter();

  FixedPSpace = FixedPSpace; // so the template access the enum
  pointsPerPlot: number;
  customRanges: boolean;
  fixedPSpace: FixedPSpace;
  topYRange: Range;
  topLeftXRange: Range;
  topRightXRange: Range;
  bottomXRange: Range;

  private projectChangedDelay: Subject<ProjectChangeType> = new Subject();
  private projectChangedImmediate: Subject<ProjectChangeType> = new Subject();
  private rangeSub: Subscription;

  constructor(public plotOptions: PlotOptionsService) {}

  ngOnInit(): void {
    this.rangeSub = merge(
      this.projectChangedDelay.pipe(debounceTime(400)),
      this.projectChangedImmediate
    ).subscribe(type => {
      switch (type) {
        case ProjectChangeType.pointsPerPlot:
          this.project.setPointsPerPlot(this.pointsPerPlot);
          break;
        case ProjectChangeType.fixedPSpace:
          this.project.setFixedPSpace(this.fixedPSpace);
          break;
        case ProjectChangeType.customRanges:
          this.project.setCustomRanges(this.customRanges);
          break;
        case ProjectChangeType.topYRange:
          this.project.setTopYRange(this.topYRange);
          break;
        case ProjectChangeType.topLeftXRange:
          this.project.setTopLeftXRange(this.topLeftXRange);
          break;
        case ProjectChangeType.topRightXRange:
          this.project.setTopRightXRange(this.topRightXRange);
          break;
        case ProjectChangeType.bottomXRange:
          this.project.setBottomXRange(this.bottomXRange);
          break;
      }
      this.project.updatePlotData().subscribe(() => {
        this.projectChanged.emit()
      });
    });
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (!('project' in changes)) {
      return;
    }

    if (this.project) {
      this.pointsPerPlot = this.project.getPointsPerPlot();
      this.fixedPSpace = this.project.getFixedPSpace();
      this.customRanges = this.project.getCustomRanges();
      this.getRanges();
    } else {
      this.pointsPerPlot = undefined;
      this.customRanges = undefined;
      this.topYRange = undefined;
      this.topLeftXRange = undefined;
      this.topRightXRange = undefined;
      this.bottomXRange = undefined;
    }
  }

  doReset(): void {
    this.plotOptions.reset();
    this.project.resetRanges();
    this.getRanges();
    this.project.updatePlotData().subscribe(() => {
      this.reset.emit();
    });
  }

  changeAttribute(name: string, value: any): void {
    if (this.plotOptions[name] !== value) {
      this.plotOptions[name] = value;
      this.optionChanged.emit();
    }
  }

  changeNumberAttribute(name: string, value: string): void {
    let n = parseFloat(value);
    if (!isNaN(n)) {
      this.changeAttribute(name, n);
    }
  }

  setProjectAttribute(type: string, value: any): void {
    let changeType = type as ProjectChangeType;
    switch (changeType) {
      case ProjectChangeType.pointsPerPlot:
        this.pointsPerPlot = value;
        break;
      case ProjectChangeType.fixedPSpace:
        if (value) {
          this.fixedPSpace = FixedPSpace.Fixed;
        } else {
          this.fixedPSpace = FixedPSpace.NotFixed;
        }
        break;
      case ProjectChangeType.customRanges:
        this.customRanges = value;
        break;
    }

    this.projectChangedImmediate.next(type as ProjectChangeType);
  }

  setProjectRange(type: string, which: string, value: string, delay = false): void {
    let n = parseFloat(value);
    if (isNaN(n)) return;

    let changeType = type as ProjectChangeType;
    let rangeType = which as RangeType;

    let range;
    switch (changeType) {
      case ProjectChangeType.topYRange:
        range = this.topYRange;
        break;
      case ProjectChangeType.topLeftXRange:
        range = this.topLeftXRange;
        break;
      case ProjectChangeType.topRightXRange:
        range = this.topRightXRange;
        break;
      case ProjectChangeType.bottomXRange:
        range = this.bottomXRange;
        break;
    }

    if (rangeType == RangeType.min) {
      range.min = n;
    } else if (rangeType == RangeType.max) {
      range.max = n;
    }

    if (delay) {
      this.projectChangedDelay.next(changeType);
    } else {
      this.projectChangedImmediate.next(changeType);
    }
  }

  private getRanges(): void {
    this.topYRange = this.project.getTopYRange();
    this.topLeftXRange = this.project.getTopLeftXRange();
    this.topRightXRange = this.project.getTopRightXRange();
    this.bottomXRange = this.project.getBottomXRange();
  }
}
