import { TestBed, async } from '@angular/core/testing';

import { Component, Input } from '@angular/core';
import { NgbModule, NgbTabsetConfig } from '@ng-bootstrap/ng-bootstrap';
import { Project } from './project';
import { ProjectService } from './project.service';
import { ZTestComponent } from './z-test.component';

@Component({selector: 'z-test-start', template: ''})
class StartStubComponent {
  @Input() model: any;
}

@Component({selector: 'z-test-project', template: ''})
class ProjectStubComponent {
  @Input() name: string;
  @Input() project: Project;
}

@Component({selector: 'z-test-output-pane', template: ''})
class OutputPaneStubComponent {
  @Input() project: Project;
  @Input('hover-disabled') hoverDisabled: boolean;
}

@Component({selector: 'z-test-help', template: ''})
class HelpStubComponent {
  @Input() topic: string;
}

@Component({selector: 'app-draggable-dialog', template: ''})
class DraggableDialogStubComponent {}

@Component({selector: 'z-test-plot-options', template: ''})
class PlotOptionsStubComponent {
  @Input() project: Project;
}

describe('ZTestComponent', () => {
  let projectServiceStub = {};

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
        ZTestComponent
      ],
      providers: [
        { provide: ProjectService, useValue: projectServiceStub },
        NgbTabsetConfig
      ]
    }).compileComponents();
  }));

  it('should create', async(() => {
    const fixture = TestBed.createComponent(ZTestComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  }));
});
