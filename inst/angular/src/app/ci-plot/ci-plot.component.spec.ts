import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CIPlotComponent } from './ci-plot.component';

describe('CIPlotComponent', () => {
  let component: CIPlotComponent;
  let fixture: ComponentFixture<CIPlotComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CIPlotComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CIPlotComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
