import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FormsModule } from '@angular/forms';
import { NgbModule, NgbPopoverConfig } from '@ng-bootstrap/ng-bootstrap';
import { TTest } from '../t-test';
import { StartComponent } from './start.component';

describe('t-test.StartComponent', () => {
  let component: StartComponent;
  let fixture: ComponentFixture<StartComponent>;

  let model = {} as TTest;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [ FormsModule, NgbModule ],
      declarations: [ StartComponent ],
      providers: [ NgbPopoverConfig ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StartComponent);
    component = fixture.componentInstance;
    component.model = model;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
