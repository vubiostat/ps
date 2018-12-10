import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { Component, Input } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { RoundPipe } from '../../round.pipe';
import { CeilPipe } from '../../ceil.pipe';
import { RangeSliderComponent } from '../../range-slider/range-slider.component';

import { PaletteService } from '../../palette.service';
import { ProjectModelComponent } from './project-model.component';

describe('dichot.ProjectModelComponent', () => {
  let component: ProjectModelComponent;
  let fixture: ComponentFixture<ProjectModelComponent>;
  let project: any;
  let model: any;
  let paletteServiceStub = {
    getColor: () => 'blue'
  };

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        FormsModule,
        NgbModule
      ],
      declarations: [
        RoundPipe,
        CeilPipe,
        RangeSliderComponent,
        ProjectModelComponent
      ],
      providers: [
        { provide: PaletteService, useValue: paletteServiceStub }
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProjectModelComponent);
    component = fixture.componentInstance;
    model = {alpha: 0.05, n: 100, p0: 0.5, m: 1};
    project = {
      getModel: () => model,
      models: [model]
    };
    component.project = project;
    component.index = 0;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
