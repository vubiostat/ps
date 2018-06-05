import { Injectable, EventEmitter } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ResizeService {
  onResize = new EventEmitter();

  constructor() {
    window.addEventListener('resize', (event) => {
      this.onResize.emit();
    });
  }
}
