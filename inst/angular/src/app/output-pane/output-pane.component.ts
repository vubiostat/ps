import { Component, ViewChild, ElementRef, Input, OnInit } from '@angular/core';
import { DomSanitizer, SafeUrl } from '@angular/platform-browser';

import { Observable } from 'rxjs/Observable';
import { Subscription } from 'rxjs/Subscription';
import 'rxjs/add/operator/debounceTime';
import 'rxjs/add/observable/merge';

import { TTest, TTestRanges, TTestSet } from '../t-test';
import { PlotOptions } from '../plot-options';
import { TTestService } from '../t-test.service';

@Component({
  selector: 'app-output-pane',
  templateUrl: './output-pane.component.html',
  styleUrls: ['./output-pane.component.css']
})
export class OutputPaneComponent implements OnInit {
  @Input() selectedModelSet: Observable<TTestSet>;
  @Input() plotOptions: PlotOptions;
  modelSet: TTestSet;
  subscription: Subscription;

  @ViewChild('plot') plotElement: ElementRef; // for plot width/height
  plotSource: SafeUrl;

  constructor(
    private ttestService: TTestService,
    private sanitizer: DomSanitizer
  ) {}

  ngOnInit(): void {
    this.selectedModelSet.subscribe(modelSet => {
      if (this.subscription) {
        this.subscription.unsubscribe();
      }
      this.modelSet = modelSet;

      let obs = Observable.merge(modelSet.onChange, this.plotOptions.onChange);
      this.subscription = obs.
        debounceTime(100).
        subscribe(changes => {
          this.drawPlot();
        });
      this.drawPlot();
    });
  }

  onResize(): void {
    this.drawPlot();
  }

  drawPlot(): void {
    if (this.modelSet && this.modelSet.model.isValid()) {
      this.setDimensions();
      this.ttestService.
        getPlot(this.modelSet, this.plotOptions).
        then(blob => this.setPlotSource(blob)).
        catch(err => console.error(err));
    }
  }

  private setPlotSource(blob: Blob): void {
    if (this.plotSource) {
      window.URL.revokeObjectURL(this.plotSource as string);
      this.plotSource = undefined;
    }
    this.plotSource = this.sanitizer.
      bypassSecurityTrustUrl(window.URL.createObjectURL(blob));
  }

  private setDimensions(): void {
    let elt = this.plotElement.nativeElement;
    this.plotOptions.width = elt.offsetWidth;
    this.plotOptions.height = elt.offsetHeight;
  }
}
