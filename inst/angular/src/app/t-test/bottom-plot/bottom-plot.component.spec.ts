import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BottomPlotComponent } from './bottom-plot.component';

describe('BottomPlotComponent', () => {
  let component: BottomPlotComponent;
  let fixture: ComponentFixture<BottomPlotComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BottomPlotComponent ]
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
