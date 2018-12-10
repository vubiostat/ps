import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { Component, Input, EventEmitter } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { ProjectService } from '../project.service';
import { ResizeService } from '../../resize.service';
import { MainComponent } from './main.component';

@Component({selector: 'dichot-start', template: ''})
class DichotStartStubComponent {
  @Input() model: any;
}

@Component({selector: 'dichot-project', template: ''})
class DichotProjectStubComponent {
  @Input() name: any;
  @Input() project: any;
}

@Component({selector: 'dichot-output-pane', template: ''})
class DichotOutputPaneStubComponent {
  @Input() project: any;
  @Input('hover-disabled') hoverDisabled: any;
}

@Component({selector: 'dichot-help', template: ''})
class DichotHelpStubComponent {
  @Input() topic: any;
}

@Component({selector: 'app-draggable-dialog', template: ''})
class AppDraggableDialogStubComponent {
  @Input() title: any;
  @Input('start-x-offset') startXOffset: any;
  @Input('start-y-offset') startYOffset: any;
}

@Component({selector: 'dichot-plot-options', template: ''})
class DichotPlotOptionsStubComponent {
  @Input() project: any;
}

describe('dichot.MainComponent', () => {
  let component: MainComponent;
  let fixture: ComponentFixture<MainComponent>;
  let projectServiceStub = {};
  let resizeServiceStub = {
    onResize: new EventEmitter()
  };
  let routeStub = {
    data: new EventEmitter()
  };

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [ NgbModule ],
      declarations: [
        DichotStartStubComponent,
        DichotProjectStubComponent,
        DichotOutputPaneStubComponent,
        DichotHelpStubComponent,
        AppDraggableDialogStubComponent,
        DichotPlotOptionsStubComponent,
        MainComponent
      ],
      providers: [
        { provide: ProjectService, useValue: projectServiceStub },
        { provide: ResizeService, useValue: resizeServiceStub },
        { provide: ActivatedRoute, useValue: routeStub }
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
