import { Component, Directive, Input, Output, ContentChild, ViewChild, TemplateRef, EventEmitter, OnInit, OnChanges, SimpleChanges, forwardRef } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';
import { NgbPopover } from '@ng-bootstrap/ng-bootstrap';

import { PaletteService } from '../palette.service';

@Directive({selector: 'ng-template[rsLabel]'})
export class RangeSliderLabel {
  constructor(public templateRef: TemplateRef<any>) {}
}

@Directive({selector: 'ng-template[rsHelp]'})
export class RangeSliderHelp {
  constructor(public templateRef: TemplateRef<any>) {}
}

@Component({
  selector: 'app-range-slider',
  templateUrl: './range-slider.component.html',
  styleUrls: ['./range-slider.component.css'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => RangeSliderComponent),
      multi: true
    }
  ]
})
export class RangeSliderComponent implements OnInit, OnChanges, ControlValueAccessor {
  @Input() label: string;
  @Input() name: string;
  @Input() min: number;
  @Input() max: number;
  @Input() step = 0.01;
  @Input('hard-min') hardMin: number;
  @Input('hard-max') hardMax: number;
  @Input('is-output') isOutput = false;
  @Input('can-add') canAdd = true;
  @Input('can-remove') canRemove = false;
  @Input('palette-color') paletteColor = -1;
  @Input('palette-theme') paletteTheme = "plasma";
  @Output('add') onAdd = new EventEmitter<string>();
  @Output('remove') onRemove = new EventEmitter<string>();
  value: number;
  private changeCallback: any;

  @ContentChild(RangeSliderLabel) labelTpl: RangeSliderLabel;
  @ContentChild(RangeSliderHelp) helpTpl: RangeSliderHelp;
  @ViewChild("errorPopover") errorPopover: NgbPopover;

  constructor(public palette: PaletteService) { }

  ngOnInit() {
  }

  ngOnChanges(changes: SimpleChanges): void {
    if ('isOutput' in changes) {
      let change = changes.isOutput;
      if (change.previousValue === true && change.currentValue === false) {
        // if isOutput changes from true to false, turn on the error message if
        // the value is out of bounds
        if (this.value < this.hardMin || this.value > this.hardMax) {
          this.errorPopover.open();
        }
      } else if (change.previousValue === false && change.currentValue === true) {
        this.errorPopover.close();
      }
    }
  }

  floor(n: number): number {
    return Math.floor(n);
  }

  ceil(n: number): number {
    return Math.ceil(n);
  }

  writeValue(value: any): void {
    this.value = value;
  }

  registerOnChange(fn: any): void {
    this.changeCallback = fn;
  }

  registerOnTouched(fn: any): void {
  }

  setDisabledState(isDisabled: boolean): void {
  }

  rangeChanged(newValue: string): void {
    this.trySetValue(newValue);
  }

  rangeInput(newValue: string): void {
    this.value = parseFloat(newValue);
  }

  numberChanged(newValue: string): void {
    this.trySetValue(newValue);
  }

  numberInput(newValue: string): void {
    this.value = parseFloat(newValue);
  }

  add(): void {
    this.onAdd.emit(this.name);
  }

  remove(): void {
    this.onRemove.emit(this.name);
  }

  private trySetValue(newValue: string): void {
    let value = parseFloat(newValue);
    if (value < this.hardMin || value > this.hardMax) {
      this.errorPopover.open();
    } else {
      this.errorPopover.close();
      this.value = value;
      this.propagateChange();
    }
  }

  private propagateChange(): void {
    if (this.changeCallback) {
      this.changeCallback(this.value);
    }
  }
}
