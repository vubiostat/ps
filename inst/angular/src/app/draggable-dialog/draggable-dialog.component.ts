import { Component, Directive, Input, Output, EventEmitter, ViewChild, TemplateRef, ElementRef, OnInit } from '@angular/core';

@Component({
  selector: 'app-draggable-dialog',
  templateUrl: './draggable-dialog.component.html',
  styleUrls: ['./draggable-dialog.component.css']
})
export class DraggableDialogComponent implements OnInit {
  @Input() title: string;
  @Input() content: any;
  @Input('start-enabled') startEnabled = false;
  @Input('start-x-offset') startXOffset = "20px";
  @Input('start-y-offset') startYOffset = "20px";
  @Output('drag-start') onDragStart = new EventEmitter();
  @Output('drag-end') onDragEnd = new EventEmitter();
  private enabled = false;
  private dragging = false;
  private xOffset: number;
  private yOffset: number;
  private lastX: number;
  private lastY: number;

  @ViewChild('main') mainElement: ElementRef;

  ngOnInit(): void {
    this.enabled = this.startEnabled;
  }

  open(): void {
    this.enabled = true;
  }

  toggle(): void {
    this.enabled = !this.enabled;
  }

  close(): void {
    this.enabled = false;
  }

  isOpen(): boolean {
    return this.enabled;
  }

  mousedown(event: any): void {
    this.startDragging();

    let box = this.mainElement.nativeElement.getBoundingClientRect();
    this.xOffset = box.left + window.pageXOffset;
    this.yOffset = box.top + window.pageYOffset;
    this.lastX = event.pageX;
    this.lastY = event.pageY;
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
      this.xOffset += event.pageX - this.lastX;
      this.yOffset += event.pageY - this.lastY;
      this.lastX = event.pageX;
      this.lastY = event.pageY;
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
