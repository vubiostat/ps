import { Component, ViewChild, TemplateRef, Input, OnChanges, SimpleChanges } from '@angular/core';
import { NgbModal, NgbTabset } from '@ng-bootstrap/ng-bootstrap';

import { TTest, TTestRanges, TTestSet } from '../t-test';
import { PlotComponent } from '../plot/plot.component';
import { BottomPlotComponent } from '../bottom-plot/bottom-plot.component';
import { ExportPlotsComponent } from '../export-plots/export-plots.component';

@Component({
  selector: 't-test-output-pane',
  templateUrl: './output-pane.component.html',
  styleUrls: ['./output-pane.component.css'],
  host: {
    '(document:copy)': 'onCopy($event)'
  }
})
export class OutputPaneComponent implements OnChanges {
  @Input('model-set') modelSet: TTestSet;
  @Input('hover-disabled') hoverDisabled = false;
  model: TTest;
  showFooter = true;
  private copyMode: string;

  @ViewChild('topLeft') topLeftPlot: PlotComponent;
  @ViewChild('topRight') topRightPlot: PlotComponent;
  @ViewChild('bottom') bottomPlot: BottomPlotComponent;
  @ViewChild('saveDialog') saveDialog: TemplateRef<any>;
  @ViewChild('footerTabset') footerTabset: NgbTabset;

  constructor(private modalService: NgbModal) {}

  ngOnChanges(changes: SimpleChanges): void {
    if (!('modelSet' in changes)) return;

    if (this.modelSet) {
      this.model = this.modelSet.getModel(0);
    } else {
      this.model = undefined;
    }
  }

  toggleFooter(value: boolean): void {
    this.showFooter = value;
    setTimeout(this.resize.bind(this), 1);
  }

  openSaveDialog(): void {
    const modalRef = this.modalService.open(ExportPlotsComponent, { windowClass: 'export-plots' });
    modalRef.componentInstance.modelSet = this.modelSet;
  }

  round(n: number): number {
    return Math.round(n * 100) / 100;
  }

  ceil(n: number): number {
    return Math.ceil(n);
  }

  resize(): void {
    this.topLeftPlot.redraw();
    this.topRightPlot.redraw();
    this.bottomPlot.redraw();
  }

  describeChanges(changes: any): string {
    let result = [];
    for (var key in changes) {
      result.push(`<span class="code">${key}</span> was changed to <span class="code">${changes[key]}</span>`);
    }
    return result.join("; ");
  }

  copyFooter(): void {
    document.execCommand('copy');
  }

  onCopy(event: any): void {
    switch (this.footerTabset.activeId) {
      case 't-test-interpretation':
        event.clipboardData.setData('text/plain', this.model.interpretation());
        event.preventDefault();
        break;
      case 't-test-log':
        if (!this.model.changeHistory || this.model.changeHistory.length == 0) {
          break;
        }
        let text = this.model.changeHistory.
          map(changes => Object.keys(changes).map(key => `${key} was changed to ${changes[key]}`).join('; ')).
          join("\r\n");
        event.clipboardData.setData('text/plain', text);
        event.preventDefault();
        break;
    }
  }
}
