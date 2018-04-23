import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BottomPlotComponent } from './bottom-plot.component';
import { FormatFixedPipe } from '../format-fixed.pipe';
import { PlotOptionsService } from '../plot-options.service';
import { PaletteService } from '../palette.service';

describe('BottomPlotComponent', () => {
  let component: BottomPlotComponent;
  let fixture: ComponentFixture<BottomPlotComponent>;
  let plotOptionsServiceStub = {};
  let paletteServiceStub = {};

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        BottomPlotComponent,
        FormatFixedPipe
      ],
      providers: [
        { provide: PlotOptionsService, useValue: plotOptionsServiceStub },
        { provide: PaletteService, useValue: paletteServiceStub },
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BottomPlotComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
