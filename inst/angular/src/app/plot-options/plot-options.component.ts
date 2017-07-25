import { Component, Input, Output, OnInit, EventEmitter } from '@angular/core';

import { Observable } from 'rxjs/Observable';
import { Subscription } from 'rxjs/Subscription';

import { TTest, TTestRanges, TTestSet } from '../t-test';
import { PlotOptions } from '../plot-options';

@Component({
  selector: 'app-plot-options',
  templateUrl: './plot-options.component.html',
  styleUrls: ['./plot-options.component.css']
})
export class PlotOptionsComponent implements OnInit {
  @Input() selectedModelSet: Observable<TTestSet>;
  @Input() plotOptions: PlotOptions;
  @Output('drag-start') onDragStart = new EventEmitter();
  @Output('drag-end') onDragEnd = new EventEmitter();
  defaultPlotOptions: PlotOptions;
  modelSet: TTestSet;
  defaultRanges: TTestRanges;
  enabled = false;
  dragging = false;
  xOffset = 20;
  yOffset = 20;
  lastX: number;
  lastY: number;
  private subscription: Subscription;

  ngOnInit() {
    this.selectedModelSet.subscribe(modelSet => {
      if (this.subscription) {
        this.subscription.unsubscribe();
        this.subscription = undefined;
      }
      this.modelSet = modelSet;

      if (modelSet) {
        this.subscription = modelSet.onCompute.subscribe(() => {
          this.setDefaultRanges();
        });
        this.setDefaultRanges();
      }
    });
    this.defaultPlotOptions = new PlotOptions();
  }

  toggle(): void {
    this.enabled = !this.enabled;
  }

  close(): void {
    this.enabled = false;
  }

  reset(): void {
    this.plotOptions.update(this.defaultPlotOptions.attributes());
    if (this.modelSet) {
      this.modelSet.ranges.updateFromArrays(this.defaultRanges.attributes());
    }
  }

  roundFloor(n: number): number {
    return Math.floor(n * 100) / 100;
  }

  roundCeil(n: number): number {
    return Math.ceil(n * 100) / 100;
  }

  mousedown(event: any): void {
    this.startDragging();
    this.lastX = event.screenX;
    this.lastY = event.screenY;
  }

  mouseup(event: any): void {
    this.stopDragging();
  }

  mousemove(event: any): void {
    if (this.dragging) {
      if ((event.buttons & 1) == 0) {
        this.stopDragging();
        return;
      }
      this.xOffset += event.screenX - this.lastX;
      this.yOffset += event.screenY - this.lastY;
      this.lastX = event.screenX;
      this.lastY = event.screenY;
    }
  }

  startDragging(): void {
    this.dragging = true;
    this.onDragStart.emit();
  }

  stopDragging(): void {
    this.dragging = false;
    this.onDragEnd.emit();
  }

  private setDefaultRanges(): void {
    this.defaultRanges = TTestRanges.fromArrays(this.modelSet.ranges.attributes());
  }
}
