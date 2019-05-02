import { TestBed, async } from '@angular/core/testing';

import { Component, Input, EventEmitter } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NgbModule, NgbTabsetConfig } from '@ng-bootstrap/ng-bootstrap';
import { Project } from './project';
import { ProjectService } from './project.service';
import { MainComponent } from './main.component';

@Component({selector: 't-test-start', template: ''})
class StartStubComponent {
  @Input() model: any;
}

@Component({selector: 't-test-project', template: ''})
class ProjectStubComponent {
  @Input() name: string;
  @Input() project: Project;
}

@Component({selector: 't-test-output-pane', template: ''})
class OutputPaneStubComponent {
  @Input() project: Project;
  @Input('hover-disabled') hoverDisabled: boolean;
}

@Component({selector: 't-test-help', template: ''})
class HelpStubComponent {
  @Input() topic: string;
}

@Component({selector: 'app-draggable-dialog', template: ''})
class DraggableDialogStubComponent {}

@Component({selector: 't-test-plot-options', template: ''})
class PlotOptionsStubComponent {
  @Input() project: Project;
}

describe('t-test.MainComponent', () => {
  let projectServiceStub = {
    getProjects: () => [],
    getSelectedIndex: () => undefined
  };
  let routeStub = {
    data: new EventEmitter()
  }

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [ NgbModule ],
      declarations: [
        StartStubComponent,
        ProjectStubComponent,
        OutputPaneStubComponent,
        HelpStubComponent,
        DraggableDialogStubComponent,
        PlotOptionsStubComponent,
        MainComponent
      ],
      providers: [
        { provide: ProjectService, useValue: projectServiceStub },
        { provide: ActivatedRoute, useValue: routeStub },
        NgbTabsetConfig
      ]
    }).compileComponents();
  }));

  it('should create', async(() => {
    const fixture = TestBed.createComponent(MainComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  }));
});
