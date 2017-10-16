import { Component, Input, ViewChild, ElementRef } from '@angular/core';
import { AbstractPlotComponent } from './abstract-plot.component';

@Component({
  selector: 't-test-serialize-plot',
  template: '<canvas #canvas style="display: none"></canvas>'
})
export class SerializePlotComponent {
  @Input('plot') plot: AbstractPlotComponent;
  @Input() width: number;
  @Input() height: number;

  @ViewChild('canvas') canvasElement: ElementRef;

  plotTitle(): string {
    return this.plot.title;
  }

  serializeAsXML(): string {
    let serializer = new XMLSerializer();
    return serializer.serializeToString(this.plot.plotElement.nativeElement);
  }

  serialize(): Promise<any> {
    return new Promise((resolve, reject) => {
      let data = this.serializeAsXML();

      let canvas = this.canvasElement.nativeElement;
      canvas.width = this.width;
      canvas.height = this.height;

      let context = canvas.getContext("2d");
      let image = new Image(this.width, this.height);
      image.addEventListener('load', () => {
        context.clearRect(0, 0, this.width, this.height);
        context.drawImage(image, 0, 0, this.width, this.height);

        canvas.toBlob(function(blob) {
          resolve(blob);
        });
      });

      let src = 'data:image/svg+xml;base64,' + btoa(data);
      image.src = src;
    });
  }
}
