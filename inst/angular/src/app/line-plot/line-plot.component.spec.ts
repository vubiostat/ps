import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FormatFixedPipe } from '../format-fixed.pipe';
import { LinePlotComponent } from './line-plot.component';
import { PlotOptionsService } from '../plot-options.service';
import { PaletteService } from '../palette.service';

describe('app.LinePlotComponent', () => {
  let component: LinePlotComponent;
  let fixture: ComponentFixture<LinePlotComponent>;

  let plotOptionsServiceStub = {
    getFontFamily: () => 'foo',
    getFontSize: () => 1
  };
  let paletteServiceStub = {};

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        FormatFixedPipe,
        LinePlotComponent
      ],
      providers: [
        { provide: PlotOptionsService, useValue: plotOptionsServiceStub },
        { provide: PaletteService, useValue: paletteServiceStub }
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LinePlotComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
