import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PlotOptionsComponent } from './plot-options.component';

describe('PlotOptionsComponent', () => {
  let component: PlotOptionsComponent;
  let fixture: ComponentFixture<PlotOptionsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PlotOptionsComponent ]
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
