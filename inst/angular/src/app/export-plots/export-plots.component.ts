import { Component, Input, OnInit, ViewChild, ElementRef } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import * as JSZip from 'jszip';

import { AbstractPlotComponent } from '../abstract-plot.component';
import { SerializePlotComponent } from '../serialize-plot.component';

@Component({
  selector: 'app-export-plots',
  templateUrl: './export-plots.component.html',
  styleUrls: ['./export-plots.component.css']
})
export class ExportPlotsComponent implements OnInit {
  @Input() topLeft: AbstractPlotComponent;
  @Input() topRight: AbstractPlotComponent;
  @Input() bottom: AbstractPlotComponent;
  includeTopLeft = true;
  includeTopRight = true;
  includeBottom = true;
  imageFormat = "svg";

  @ViewChild('downloadLink') downloadLink: ElementRef;
  @ViewChild('topLeftSerializer') topLeftSerializer: SerializePlotComponent;
  @ViewChild('topRightSerializer') topRightSerializer: SerializePlotComponent;
  @ViewChild('bottomSerializer') bottomSerializer: SerializePlotComponent;

  constructor(private activeModal: NgbActiveModal) {}

  ngOnInit() {
  }

  save(): void {
    let serializers = [];
    if (this.includeTopLeft)  serializers.push(this.topLeftSerializer);
    if (this.includeTopRight) serializers.push(this.topRightSerializer);
    if (this.includeBottom)   serializers.push(this.bottomSerializer);

    let date = new Date();
    let month = date.getMonth() + 1;
    let monthStr = month < 10 ? `0${month}` : month.toString();
    let day = date.getDate();
    let dayStr = day < 10 ? `0${day}` : day.toString();
    let dateStr = `${date.getFullYear()}-${monthStr}-${dayStr}`;

    let zip = new JSZip();
    let dir = zip.folder(`ps-plots-${dateStr}`);
    let promise = Promise.resolve();
    serializers.forEach(serializer => {
      promise = promise.then(() => {
        let result;
        if (this.imageFormat == 'svg') {
          let xml = serializer.serializeAsXML();
          var blob = new Blob([xml], { type: "image/svg+xml" });
          result = Promise.resolve(blob);
        } else {
          result = serializer.serialize();
        }
        return result.then(blob => {
          dir.file(`${serializer.plotTitle()}.${this.imageFormat}`, blob);
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
