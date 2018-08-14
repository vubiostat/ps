import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OutputPaneComponent } from './output-pane.component';

describe('OutputPaneComponent', () => {
  let component: OutputPaneComponent;
  let fixture: ComponentFixture<OutputPaneComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OutputPaneComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OutputPaneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
