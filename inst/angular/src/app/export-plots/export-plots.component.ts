import { Component, Input, OnInit, ViewChild, ElementRef } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import * as JSZip from 'jszip';

import { PlotComponent } from '../plot/plot.component';
import { BottomPlotComponent } from '../bottom-plot/bottom-plot.component';

@Component({
  selector: 'app-export-plots',
  templateUrl: './export-plots.component.html',
  styleUrls: ['./export-plots.component.css']
})
export class ExportPlotsComponent implements OnInit {
  @Input() topLeft: PlotComponent;
  @Input() topRight: PlotComponent;
  @Input() bottom: BottomPlotComponent;
  includeTopLeft = true;
  includeTopRight = true;
  includeBottom = true;
  imageFormat = "svg";

  @ViewChild('downloadLink') downloadLink: ElementRef;

  constructor(private activeModal: NgbActiveModal) {}

  ngOnInit() {
  }

  save(): void {
    let plots = [];
    if (this.includeTopLeft)  plots.push(this.topLeft);
    if (this.includeTopRight) plots.push(this.topRight);
    if (this.includeBottom)   plots.push(this.bottom);

    let date = new Date();
    let month = date.getMonth();
    let monthStr = month < 10 ? `0${month}` : month.toString();
    let day = date.getDate();
    let dayStr = day < 10 ? `0${day}` : day.toString();
    let dateStr = `${date.getFullYear()}-${monthStr}-${dayStr}`;

    let zip = new JSZip();
    let dir = zip.folder(`ps-plots-${dateStr}`);
    let promise = Promise.resolve();
    plots.forEach(plot => {
      promise = promise.then(() => {
        let result;
        if (this.imageFormat == 'svg') {
          let xml = plot.serializeAsXML();
          var blob = new Blob([xml], { type: "image/svg+xml" });
          result = Promise.resolve(blob);
        } else {
          result = plot.serialize();
        }
        return result.then(blob => {
          dir.file(`${plot.title}.${this.imageFormat}`, blob);
        });
      });
    });

    promise.then(() => {
      zip.generateAsync({ type: 'blob' }).then(content => {
        let url = URL.createObjectURL(content);
        let elt = this.downloadLink.nativeElement;
        elt.href = url;
        elt.download = `ps-plots-${dateStr}.zip`;
        elt.click();
        URL.revokeObjectURL(url);
        this.activeModal.close();
      });
    });
  }

  cancel(): void {
    this.activeModal.close();
  }
}
