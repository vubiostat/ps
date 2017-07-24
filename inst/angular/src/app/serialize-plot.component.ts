import { Component, Input, ViewChild, ElementRef } from '@angular/core';
import { AbstractPlotComponent } from './abstract-plot.component';

@Component({
  selector: 'app-serialize-plot',
  template: '<canvas #canvas style="display: none"></canvas>'
})
export class SerializePlotComponent {
  @Input('plot') plot: AbstractPlotComponent;
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

      let width = this.plot.getDimension('width');
      let height = this.plot.getDimension('height');
      let canvas = this.canvasElement.nativeElement;
      canvas.width = width;
      canvas.height = height;

      let context = canvas.getContext("2d");
      let image = new Image(width, height);
      image.addEventListener('load', () => {
        context.clearRect(0, 0, width, height);
        context.drawImage(image, 0, 0, width, height);

        canvas.toBlob(function(blob) {
          resolve(blob);
        });
      });

      let src = 'data:image/svg+xml;base64,' + btoa(data);
      image.src = src;
    });
  }
}
