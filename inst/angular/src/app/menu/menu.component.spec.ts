import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { Directive, Input, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';

import { MenuComponent } from './menu.component';

@Directive({
    selector: '[routerLink]',
    standalone: false
})
class RouterLinkStubDirective {
  @Input() routerLink: any;
  @Input() routerLinkActive: any;
  @Input() routerLinkActiveOptions: any;
}

describe('MenuComponent', () => {
  let component: MenuComponent;
  let fixture: ComponentFixture<MenuComponent>;
  let routerStub = {
    events: new EventEmitter()
  };

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        BrowserAnimationsModule
      ],
      declarations: [
        RouterLinkStubDirective,
        MenuComponent
      ],
      providers: [
        { provide: Router, useValue: routerStub }
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
