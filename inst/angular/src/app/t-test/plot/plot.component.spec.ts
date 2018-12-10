import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FormatFixedPipe } from '../../format-fixed.pipe';
import { PlotOptionsService } from '../../plot-options.service';
import { PaletteService } from '../../palette.service';
import { PlotComponent } from './plot.component';

describe('t-test.PlotComponent', () => {
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
        FormatFixedPipe,
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
