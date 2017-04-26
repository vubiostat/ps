import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-help',
  templateUrl: './help.component.html',
  styleUrls: ['./help.component.css']
})
export class HelpComponent {
  @Output() onClose = new EventEmitter();

  constructor() { }

  close(): void {
    this.onClose.emit();
  }
}
