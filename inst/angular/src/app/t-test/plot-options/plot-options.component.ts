import { Component, Input, Output, OnInit, OnChanges, SimpleChanges, EventEmitter } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Subject } from 'rxjs/Subject';
import { Subscription } from 'rxjs/Subscription';
import 'rxjs/add/observable/merge';
import 'rxjs/add/operator/debounceTime';
import 'rxjs/add/operator/filter';

import { Project, ProjectRangeChange } from '../project';
import { TTest } from '../t-test';
import { PlotOptionsService } from '../plot-options.service';

@Component({
  selector: 't-test-plot-options',
  templateUrl: './plot-options.component.html',
  styleUrls: ['./plot-options.component.css']
})
export class PlotOptionsComponent implements OnInit, OnChanges {
  @Input('project') project: Project;
  @Output() optionChanged: EventEmitter<any> = new EventEmitter();
  @Output() rangeChanged: EventEmitter<ProjectRangeChange> = new EventEmitter();
  @Output() reset: EventEmitter<any> = new EventEmitter();
  model: TTest;

  private attributeChangedImmediate: Subject<any> = new Subject();
  private rangeChangedDelay: Subject<ProjectRangeChange> = new Subject();
  private rangeChangedImmediate: Subject<ProjectRangeChange> = new Subject();
  private attributeSub: Subscription;
  private rangeSub: Subscription;

  constructor(private plotOptions: PlotOptionsService) {}

  ngOnInit(): void {
    this.rangeSub = Observable.merge(
      this.rangeChangedDelay.debounceTime(400),
      this.rangeChangedImmediate
    ).subscribe(change => {
      this.rangeChanged.emit(change);
    });

    this.attributeSub = this.attributeChangedImmediate.
      filter(change => {
        return this.plotOptions[change.name] !== change.value;
      }).subscribe(change => {
        this.plotOptions[change.name] = change.value;
        this.optionChanged.emit();
      });
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (this.project) {
      this.model = this.project.getModel(0);
    }
  }

  doReset(): void {
    this.plotOptions.reset();
    this.reset.emit();
  }

  changeAttribute(name: string, value: any): void {
    let change = { name: name, value: value };
    this.attributeChangedImmediate.next(change);
  }

  changeNumberAttribute(name: string, value: string): void {
    let n = parseFloat(value);
    if (!isNaN(n)) {
      this.changeAttribute(name, n);
    }
  }

  changeProjectRange(name: string, which: string, value: string, input = false): void {
    let n = parseFloat(value);
    if (isNaN(n)) return;

    let change = { name: name, which: which, value: n } as ProjectRangeChange;
    if (input) {
      this.rangeChangedDelay.next(change);
    } else {
      this.rangeChangedImmediate.next(change);
    }
  }
}
