import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-help',
  templateUrl: './help.component.html',
  styleUrls: ['./help.component.css']
})
export class HelpComponent {
  @Input() topic: string;
  @Output('drag-start') onDragStart = new EventEmitter();
  @Output('drag-end') onDragEnd = new EventEmitter();
  enabled = false;
  dragging = false;
  xOffset = 0;
  yOffset = 0;
  lastX: number;
  lastY: number;

  toggle(topic: string): void {
    if (this.enabled && this.topic == topic) {
      this.close();
    } else {
      this.topic = topic;
      this.enabled = true;
    }
  }

  close(): void {
    this.enabled = false;
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
}
