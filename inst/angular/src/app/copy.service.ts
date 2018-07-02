import { Injectable, EventEmitter } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CopyService {
  onCopy = new EventEmitter();

  constructor() {
    document.addEventListener('copy', (event) => {
      this.onCopy.emit(event);
    });
  }
}
