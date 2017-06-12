import { Component, Directive, Input, ContentChild, TemplateRef, OnInit, forwardRef } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';

@Directive({selector: 'ng-template[rsLabel]'})
export class RangeSliderLabel {
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
export class RangeSliderComponent implements OnInit, ControlValueAccessor {
  @Input() label: string;
  @Input() name: string;
  @Input() min: number;
  @Input() max: number;
  @Input() step = 0.01;
  @Input() hardMin: number;
  @Input() hardMax: number;
  @Input() isOutput = false;
  value: number;
  private propagateChange: any;

  @ContentChild(RangeSliderLabel) labelTpl: RangeSliderLabel;

  constructor() { }

  ngOnInit() {
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
    this.propagateChange = fn;
  }

  registerOnTouched(fn: any): void {
  }

  setDisabledState(isDisabled: boolean): void {
  }

  rangeChanged(newValue: string): void {
    console.log("range:", newValue);
    this.value = parseFloat(newValue);
    this.propagateChange(this.value);
  }

  rangeInput(newValue: string): void {
    console.log("range input:", newValue);
    this.value = parseFloat(newValue);
  }

  numberChanged(newValue: string): void {
    console.log("number:", newValue);
    this.value = parseFloat(newValue);
    this.propagateChange(this.value);
  }

  numberInput(newValue: string): void {
    console.log("number input:", newValue);
    this.value = parseFloat(newValue);
  }
}
