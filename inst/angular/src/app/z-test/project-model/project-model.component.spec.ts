import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NgbModule, NgbPopoverConfig } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule } from '@angular/forms';
import { RoundPipe } from '../../round.pipe';
import { CeilPipe } from '../../ceil.pipe';
import { PlotOptionsService } from '../plot-options.service';
import { PaletteService } from '../../palette.service';
import { RangeSliderComponent } from '../../range-slider/range-slider.component';
import { Project } from '../project';
import { ProjectModelComponent } from './project-model.component';

describe('ProjectModelComponent', () => {
  let component: ProjectModelComponent;
  let fixture: ComponentFixture<ProjectModelComponent>;

  let plotOptionsServiceStub = {};
  let paletteServiceStub = { getColor: (index: number) => 'red' };
  let model = { alpha: 0.05 };
  let project = {
    models: [ model ],
    getModel: (index: number) => model
  } as Project;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [ FormsModule, NgbModule ],
      declarations: [
        RoundPipe,
        CeilPipe,
        RangeSliderComponent,
        ProjectModelComponent
      ],
      providers: [
        { provide: PlotOptionsService, useValue: plotOptionsServiceStub },
        { provide: PaletteService, useValue: paletteServiceStub },
        NgbPopoverConfig
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProjectModelComponent);
    component = fixture.componentInstance;
    component.project = project;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
