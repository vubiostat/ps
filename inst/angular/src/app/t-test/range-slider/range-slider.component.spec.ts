import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NgbModule, NgbPopoverConfig } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule } from '@angular/forms';
import { RangeSliderComponent } from './range-slider.component';

describe('RangeSliderComponent', () => {
  let component: RangeSliderComponent;
  let fixture: ComponentFixture<RangeSliderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [ NgbModule, FormsModule ],
      declarations: [ RangeSliderComponent ],
      providers: [
        NgbPopoverConfig
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RangeSliderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
