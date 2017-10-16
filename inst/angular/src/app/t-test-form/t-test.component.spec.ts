import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TTestComponent } from './t-test.component';

describe('TTestComponent', () => {
  let component: TTestComponent;
  let fixture: ComponentFixture<TTestComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TTestComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TTestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
