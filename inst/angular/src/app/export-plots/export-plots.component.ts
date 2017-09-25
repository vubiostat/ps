import { Component, Input, ViewChild, ElementRef, OnInit} from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import * as JSZip from 'jszip';

import { TTestSet } from '../t-test';
import { PlotComponent } from '../plot/plot.component';
import { BottomPlotComponent } from '../bottom-plot/bottom-plot.component';
import { SerializePlotComponent } from '../serialize-plot.component';

@Component({
  selector: 'app-export-plots',
  templateUrl: './export-plots.component.html',
  styleUrls: ['./export-plots.component.css']
})
export class ExportPlotsComponent implements OnInit {
  @Input('model-set') modelSet: TTestSet;

  includeTopLeft = true;
  topLeftTitle: string;
  topLeftWidth = 640;
  topLeftHeight = 480;
  topLeftDropLines = true;
  topLeftTarget = true;

  includeTopRight = true;
  topRightTitle: string;
  topRightWidth = 640;
  topRightHeight = 480;
  topRightDropLines = true;
  topRightTarget = true;

  includeBottom = true;
  bottomTitle = "Precision vs. Effect Size";
  bottomWidth = 640;
  bottomHeight = 200;

  imageFormat = "svg";

  @ViewChild('topLeftPlot') topLeftPlot: PlotComponent;
  @ViewChild('topRightPlot') topRightPlot: PlotComponent;
  @ViewChild('bottomPlot') bottomPlot: BottomPlotComponent;
  @ViewChild('topLeftSerializer') topLeftSerializer: SerializePlotComponent;
  @ViewChild('topRightSerializer') topRightSerializer: SerializePlotComponent;
  @ViewChild('bottomSerializer') bottomSerializer: SerializePlotComponent;
  @ViewChild('downloadLink') downloadLink: ElementRef;

  constructor(private activeModal: NgbActiveModal) {}

  ngOnInit(): void {
    switch (this.modelSet.getModel(0).output) {
      case "n":
        this.topLeftTitle = "Sample Size vs. Power";
        this.topRightTitle = "Sample Size vs. Detectable Alternative";
        break;
      case "power":
        this.topLeftTitle = "Power vs. Sample Size";
        this.topRightTitle = "Power vs. Detectable Alternative";
        break;
      case "delta":
        this.topLeftTitle = "Detectable Alternative vs. Sample Size";
        this.topRightTitle = "Detectable Alternative vs. Power";
        break;
    }
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
    serializers.forEach((serializer, i) => {
      promise = promise.then(() => {
        let result;
        if (this.imageFormat == 'svg') {
          let xml = serializer.serializeAsXML();
          var blob = new Blob([xml], { type: "image/svg+xml" });
          result = Promise.resolve(blob);
        } else {
          result = serializer.serialize();
        }
        return result.then(
          blob => {
            dir.file(`${serializer.plotTitle()}.${this.imageFormat}`, blob);
          },
          err => console.error(err)
        );
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
