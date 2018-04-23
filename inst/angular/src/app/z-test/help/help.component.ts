import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'z-test-help',
  templateUrl: './help.component.html',
  styleUrls: ['./help.component.css']
})
export class HelpComponent {
  @Input() topic: string;
}
