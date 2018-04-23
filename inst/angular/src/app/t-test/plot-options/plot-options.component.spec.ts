import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Component, Input } from '@angular/core';
import { RoundPipe } from '../../round.pipe';
import { PlotOptionsService } from '../plot-options.service';
import { PlotOptionsComponent } from './plot-options.component';

@Component({selector: 't-test-range-slider', template: ''})
class RangeSliderStubComponent {
  @Input() min: number;
  @Input() max: number;
  @Input('hard-min') hardMin: number;
  @Input('hard-max') hardMax: number;
  @Input() step: number;
  @Input() ngModel: any;
}

describe('PlotOptionsComponent', () => {
  let component: PlotOptionsComponent;
  let fixture: ComponentFixture<PlotOptionsComponent>;

  let plotOptionsServiceStub = {};

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        RangeSliderStubComponent,
        RoundPipe,
        PlotOptionsComponent
      ],
      providers: [
        { provide: PlotOptionsService, useValue: plotOptionsServiceStub }
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PlotOptionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
