import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Component, Input } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { PlotOptionsService } from '../plot-options.service';
import { PaletteService } from '../../palette.service';
import { Project } from '../project';
import { ProjectComponent } from './project.component';

@Component({selector: 't-test-project-model', template: ''})
class ProjectModelStubComponent {
  @Input() project: Project;
  @Input() index: number;
}

describe('ProjectComponent', () => {
  let component: ProjectComponent;
  let fixture: ComponentFixture<ProjectComponent>;

  let plotOptionsServiceStub = {};
  let paletteServiceStub = { getColor: (index: number) => 'red' };
  let model = { alpha: 0.05 };
  let project = {
    selectedIndex: 0,
    models: [ model ],
    getModel: (index: number) => model,
    getOutput: () => 'power'
  } as Project;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [ FormsModule ],
      declarations: [
        ProjectModelStubComponent,
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
    component.project = project;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
