import { EventEmitter } from '@angular/core';

export abstract class ChangeEmitter {
  protected changes = {};
  prevChanges = {};
  protected noEmit = false;
  onChange = new EventEmitter();

  protected emit(): void {
    if (!this.noEmit && this.changes && Object.keys(this.changes).length > 0) {
      let changes = Object.assign({}, this.changes);
      this.prevChanges = Object.assign({}, this.changes);
      this.changes = {};
      this.onChange.emit(changes);
    }
  }
}

export function Changeable(target: Object, name: string) {
  Object.defineProperty(target, name, {
    get: function() {
      return this[`_${name}`];
    },
    set: function(value) {
      if (value != this[`_${name}`]) {
        this[`_${name}`] = value;
        this.changes[name] = value;
        this.emit();
      }
    },
    enumerable: true
  });
}
