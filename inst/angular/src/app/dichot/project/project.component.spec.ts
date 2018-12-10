import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { Component, Input } from '@angular/core';

import { PlotOptionsService } from '../../plot-options.service';
import { PaletteService } from '../../palette.service';
import { ProjectComponent } from './project.component';

@Component({selector: 'dichot-project-model', template: ''})
class DichotProjectModelStubComponent {
  @Input('project') project: any;
  @Input('index') index: any;
}

describe('dichot.ProjectComponent', () => {
  let component: ProjectComponent;
  let fixture: ComponentFixture<ProjectComponent>;
  let model: any;
  let project: any;
  let plotOptionsServiceStub = {};
  let paletteServiceStub = {};

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [ FormsModule ],
      declarations: [
        DichotProjectModelStubComponent,
        ProjectComponent
      ],
      providers: [
        { provide: PlotOptionsService, useValue: plotOptionsServiceStub },
        { provide: PaletteService, useValue: paletteServiceStub }
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProjectComponent);
    component = fixture.componentInstance;
    model = {};
    project = {
      selectedIndex: 0,
      models: [model],
      getModel: () => model,
      getMatched: () => '',
      getOutput: () => ''
    };
    component.project = project;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
