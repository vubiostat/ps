import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 't-test-help',
  templateUrl: './help.component.html',
  styleUrls: ['./help.component.css']
})
export class HelpComponent {
  @Input() topic: string;
}
