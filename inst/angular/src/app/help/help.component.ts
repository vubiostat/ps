import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
    selector: 'app-help',
    templateUrl: './help.component.html',
    styleUrls: ['./help.component.css'],
    standalone: false
})
export class HelpComponent {
  @Input() topic: string;
}
