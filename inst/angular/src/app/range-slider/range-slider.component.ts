import { Component, Directive, Input, Output, ContentChild, ViewChild, TemplateRef, ElementRef, EventEmitter, OnInit, OnChanges, SimpleChanges, AfterContentInit, forwardRef } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';
import { NgbPopover } from '@ng-bootstrap/ng-bootstrap';
import { Subject } from 'rxjs';
import { debounceTime, filter } from 'rxjs/operators';

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
export class RangeSliderComponent implements OnInit, OnChanges, AfterContentInit, ControlValueAccessor {
  @Input() label: string;
  @Input() name: string;
  @Input() min: number;
  @Input() max: number;
  @Input() step = 0.01;
  @Input('hard-min') hardMin: number;
  @Input('hard-max') hardMax: number;
  @Input('is-output') isOutput = false;
  @Input('help-tpl') helpTpl: TemplateRef<any>;
  @Input('label-tpl') labelTpl: TemplateRef<any>;
  @Input('show-dot') showDot = false;
  value: number;
  hasError = false;
  private changeCallback: any;
  private inputSubject: Subject<string> = new Subject();
  private dirty = false;

  @ContentChild(RangeSliderLabel) rsLabelTpl: RangeSliderLabel;
  @ContentChild(RangeSliderHelp) rsHelpTpl: RangeSliderHelp;
  @ViewChild("errorPopover") errorPopover: NgbPopover;
  @ViewChild("number") numberElement: ElementRef;
  @ViewChild("range") rangeElement: ElementRef;

  ngOnInit(): void {
    this.inputSubject.pipe(
      debounceTime(400),
      filter(value => {
        // skip values when not dirty
        return this.dirty;
      })
    ).subscribe(value => {
      this.trySetValue(value);
    });
  }

  ngAfterContentInit(): void {
    if (!this.helpTpl && this.rsHelpTpl) {
      this.helpTpl = this.rsHelpTpl.templateRef;
    }
    if (!this.labelTpl && this.rsLabelTpl) {
      this.labelTpl = this.rsLabelTpl.templateRef;
    }
  }

  ngOnChanges(changes: SimpleChanges): void {
    if ('isOutput' in changes) {
      let change = changes.isOutput;
      if (change.previousValue === true && change.currentValue === false) {
        // if isOutput changes from true to false, turn on the error message if
        // the value is out of bounds
        if (this.value < this.hardMin || this.value > this.hardMax) {
          this.hasError = true;
          this.errorPopover.open();
        }
      } else if (change.previousValue === false && change.currentValue === true) {
        this.hasError = false;
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

  round(n: number, digits = 1): number {
    let ten = 10 ** digits;
    n = n * ten;
    n = Math.round(n);
    return n / ten;
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
    this.dirty = true;
    this.numberElement.nativeElement.value = newValue;
    this.inputSubject.next(newValue);
  }

  numberChanged(newValue: string): void {
    if (this.dirty) {
      this.trySetValue(newValue);
    }
  }

  numberInput(newValue: string): void {
    this.dirty = true;
    this.rangeElement.nativeElement.value = newValue;
    this.inputSubject.next(newValue);
  }

  blurred(): void {
    if (this.hasError) {
      this.numberElement.nativeElement.value = this.value;
      this.hasError = false;
      this.errorPopover.close();
    }
  }

  private trySetValue(newValue: string): void {
    let value = parseFloat(newValue);
    if (value < this.hardMin || value > this.hardMax) {
      this.hasError = true;
      this.errorPopover.open();
    } else {
      this.hasError = false;
      this.errorPopover.close();
      this.value = value;
      this.propagateChange();
    }
    this.dirty = false;
  }

  private propagateChange(): void {
    if (this.changeCallback) {
      this.changeCallback(this.value);
    }
  }
}
