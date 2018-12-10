import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { Component, Input, Pipe } from '@angular/core';

import { PlotOptionsService } from '../../plot-options.service';
import { PlotOptionsComponent } from './plot-options.component';

@Component({selector: 'app-range-slider', template: ''})
class AppRangeSliderStubComponent {
  @Input('name') name: any;
  @Input('label') label: any;
  @Input('min') min: any;
  @Input('max') max: any;
  @Input('hard-min') hardMin: any;
  @Input('hard-max') hardMax: any;
  @Input('step') step: any;
}

@Pipe({name: 'round'})
class RoundStubPipe {}

describe('dichot.PlotOptionsComponent', () => {
  let component: PlotOptionsComponent;
  let fixture: ComponentFixture<PlotOptionsComponent>;
  let plotOptionsServiceStub = {};

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        FormsModule
      ],
      declarations: [
        AppRangeSliderStubComponent,
        RoundStubPipe,
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
