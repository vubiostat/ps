import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DraggableDialogComponent } from './draggable-dialog.component';

describe('DraggableDialogComponent', () => {
  let component: DraggableDialogComponent;
  let fixture: ComponentFixture<DraggableDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DraggableDialogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DraggableDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
