import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-help',
  templateUrl: './help.component.html',
  styleUrls: ['./help.component.css']
})
export class HelpComponent {
  @Input() topic: string;
  @Output() onClose = new EventEmitter();

  constructor() { }

  close(): void {
    this.onClose.emit();
  }
}
