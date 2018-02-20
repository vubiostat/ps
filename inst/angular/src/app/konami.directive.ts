import { Directive, Input, Output, EventEmitter } from '@angular/core';

@Directive({
  selector: '[appKonami]',
  host: {
    '(document:keydown)': 'onKeyDown($event)'
  }
})
export class KonamiDirective {
  @Output() konami = new EventEmitter();
  konamiKeys = [38, 38, 40, 40, 37, 39, 37, 39, 66, 65];
  keyIndex = 0;

  constructor() { }

  onKeyDown(event: any): void {
    if (event.keyCode === this.konamiKeys[this.keyIndex]) {
      this.keyIndex++;
      if (this.keyIndex === this.konamiKeys.length) {
        this.konami.emit();
      }
    } else {
      this.keyIndex = 0;
    }
  }
}
