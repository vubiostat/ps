import { Component, Input, ViewChild, ElementRef, OnInit, AfterViewChecked } from '@angular/core';
import { Observable } from 'rxjs';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

import { AbstractProject } from '../abstract-project';
import { AbstractPlotComponent } from '../abstract-plot.component';
import { LinePlotHandler } from '../line-plot-handler';
import { CIPlotHandler } from '../ci-plot-handler';
import { LinePlotComponent } from '../line-plot/line-plot.component';
import { CIPlotComponent } from '../ci-plot/ci-plot.component';
import { ExportService, PlotInfo, FormatsResponse, PlotsResponse } from '../export.service'

import * as stableSort from 'stable';

enum Platform {
  iOS,
  WP,
  Android,
  Linux,
  Mac,
  Windows,
  BB,
  Other
}

/* browser.js v0.1-dev | @ajlkn | MIT licensed */
let platformPatterns: [Platform, RegExp][] = [
  [Platform.iOS,     /([0-9_]+) like Mac OS X/],
  [Platform.iOS,     /CPU like Mac OS X/],
  [Platform.WP,      /Windows Phone ([0-9\.]+)/],
  [Platform.Android, /Android ([0-9\.]+)/],
  [Platform.Linux,   /Linux/],
  [Platform.Mac,     /Macintosh.+Mac OS X ([0-9_]+)/],
  [Platform.Windows, /Windows NT ([0-9\.]+)/],
  [Platform.BB,      /BlackBerry.+Version\/([0-9\.]+)/],
  [Platform.BB,      /BB[0-9]+.+Version\/([0-9\.]+)/],
];

@Component({
  selector: 'app-export-plots',
  templateUrl: './export-plots.component.html',
  styleUrls: ['./export-plots.component.css']
})
export class ExportPlotsComponent implements OnInit, AfterViewChecked {
  @Input('project') project: AbstractProject;
  @Input('top-left-legend-x-offset') topLeftLegendXOffset: number;
  @Input('top-left-legend-y-offset') topLeftLegendYOffset: number;
  @Input('top-right-legend-x-offset') topRightLegendXOffset: number;
  @Input('top-right-legend-y-offset') topRightLegendYOffset: number;

  linePlotHandler: LinePlotHandler;
  ciPlotHandler: CIPlotHandler;

  includeTopLeft = true;
  topLeftTitle: string;
  topLeftDim: string = "640x480";
  topLeftWidth = 640;
  topLeftHeight = 480;
  topLeftTarget = true;

  includeTopRight = true;
  topRightTitle: string;
  topRightDim: string = "640x480";
  topRightWidth = 640;
  topRightHeight = 480;
  topRightTarget = true;

  includeBottom = true;
  bottomTitle = "Precision vs. Effect Size";
  bottomDim: string = "640x160";
  bottomWidth = 640;
  bottomHeight = 160;

  imageFormats: string[] = [];
  imageFormat: string;

  @ViewChild('topLeftPlot', { static: false }) topLeftPlot: LinePlotComponent;
  @ViewChild('topRightPlot', { static: false }) topRightPlot: LinePlotComponent;
  @ViewChild('bottomPlot', { static: false }) bottomPlot: CIPlotComponent;
  @ViewChild('downloadLink', { static: true }) downloadLink: ElementRef;

  constructor(
    private activeModal: NgbActiveModal,
    private exportService: ExportService
  ) {}

  ngOnInit(): void {
    let platform = this.detectPlatform();
    switch (platform) {
      case Platform.Windows:
        this.imageFormat = "WMF";
        break;
      case Platform.Mac:
        this.imageFormat = "EPS";
        break;
      case Platform.Linux:
        this.imageFormat = "SVG";
        break;
      default:
        this.imageFormat = "PNG";
        break;
    }

    this.exportService.formats().subscribe(response => {
      this.imageFormats = response.formats;
      let formatOk = this.imageFormats.some(format => {
        return this.imageFormat == format;
      })
      if (!formatOk) {
        // PNG will always be supported
        this.imageFormat = "PNG";
      }
    });

    this.linePlotHandler = this.project.getLinePlotHandler();
    this.ciPlotHandler = this.project.getCIPlotHandler();
  }

  ngAfterViewChecked(): void {
    if (!this.topLeftTitle || !this.topRightTitle || !this.bottomTitle) {
      setTimeout(() => {
        if (this.topLeftPlot) {
          this.topLeftTitle = this.topLeftPlot.title;
        }

        if (this.topRightPlot) {
          this.topRightTitle = this.topRightPlot.title;
        }

        if (this.bottomPlot) {
          this.bottomTitle = this.bottomPlot.title;
        }
      }, 1);
    }
  }

  detectPlatform(): Platform {
    if (navigator) {
      let ua = navigator.userAgent;
      for (var i = 0, ilen = platformPatterns.length; i < ilen; i++) {
        let pattern = platformPatterns[i];
        if (ua.match(pattern[1])) {
          return pattern[0];
        }
      }
    }

    return Platform.Other;
  }

  setDim(which: string, value: string): void {
    if (value != 'other') {
      let arr = value.split("x");
      this[`${which}Width`] = parseInt(arr[0]);
      this[`${which}Height`] = parseInt(arr[1]);
    }
  }

  serializePlot(plot: AbstractPlotComponent): string {
    let serializer = new XMLSerializer();
    return serializer.serializeToString(plot.plotElement.nativeElement);
  }

  save(): void {
    let plots: PlotInfo[] = [];
    if (this.includeTopLeft) {
      plots.push({
        name: this.topLeftTitle,
        width: this.topLeftWidth,
        height: this.topLeftHeight,
        svg: this.serializePlot(this.topLeftPlot)
      } as PlotInfo);
    }
    if (this.includeTopRight) {
      plots.push({
        name: this.topRightTitle,
        width: this.topRightWidth,
        height: this.topRightHeight,
        svg: this.serializePlot(this.topRightPlot)
      } as PlotInfo);
    }
    if (this.includeBottom) {
      plots.push({
        name: this.bottomTitle,
        width: this.bottomWidth,
        height: this.bottomHeight,
        svg: this.serializePlot(this.bottomPlot)
      } as PlotInfo);
    }

    this.exportService.plots(this.imageFormat, plots).subscribe(response => {
      let data = atob(response.data);
      var buf = new ArrayBuffer(data.length);
      var arr = new Uint8Array(buf);
      for (var i = 0; i < data.length; i++) {
        arr[i] = data.charCodeAt(i);
      }

      let blob = new Blob([buf], { type: 'application/zip' })
      let url = URL.createObjectURL(blob);
      let elt = this.downloadLink.nativeElement;
      elt.href = url;
      elt.download = response.filename;
      elt.click();
      URL.revokeObjectURL(url);
      this.activeModal.close();
    });
  }

  cancel(): void {
    this.activeModal.close();
  }
}
