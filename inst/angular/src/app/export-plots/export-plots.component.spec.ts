import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ExportPlotsComponent } from './export-plots.component';

describe('ExportPlotsComponent', () => {
  let component: ExportPlotsComponent;
  let fixture: ComponentFixture<ExportPlotsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ExportPlotsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ExportPlotsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
