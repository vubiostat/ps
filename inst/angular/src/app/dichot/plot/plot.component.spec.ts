import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { Pipe } from '@angular/core';

import { PlotOptionsService } from '../../plot-options.service';
import { PaletteService } from '../../palette.service';
import { PlotComponent } from './plot.component';

@Pipe({name: 'formatFixed'})
class FormatFixedStubPipe {}

describe('dichot.PlotComponent', () => {
  let component: PlotComponent;
  let fixture: ComponentFixture<PlotComponent>;
  let plotOptionsServiceStub = {
    getFontFamily: () => 'foo',
    getFontSize: () => 1
  };
  let paletteServiceStub = {};

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        FormatFixedStubPipe,
        PlotComponent
      ],
      providers: [
        { provide: PlotOptionsService, useValue: plotOptionsServiceStub },
        { provide: PaletteService, useValue: paletteServiceStub }
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PlotComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
