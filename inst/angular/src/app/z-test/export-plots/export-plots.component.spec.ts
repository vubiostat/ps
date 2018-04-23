import { async, fakeAsync, ComponentFixture, TestBed } from '@angular/core/testing';

import { Component, Input } from '@angular/core';
import { NgbModule, NgbActiveModal, NgbTabsetConfig } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule } from '@angular/forms';
import { ExportService } from '../export.service';
import { FormatFixedPipe } from '../format-fixed.pipe';
import { Project } from '../project';
import { ExportPlotsComponent } from './export-plots.component';

@Component({selector: 'z-test-plot', template: ''})
class PlotStubComponent {
  @Input() project: Project;
  @Input('hover-disabled') hoverDisabled: boolean;
  @Input('disable-drag') disableDrag: boolean;
  @Input('hide-drop-lines') hideDropLines: boolean;
  @Input('hide-target') hideTarget: boolean;
  @Input('fixed-width') fixedWidth: number;
  @Input('fixed-height') fixedHeight: number;
  @Input('legend-x-offset') legendXOffset: number;
  @Input('legend-y-offset') legendYOffset: number;
}

@Component({selector: 'z-test-bottom-plot', template: ''})
class BottomPlotStubComponent {
  @Input() project: Project;
  @Input('disable-drag-target') disableDragTarget: boolean;
  @Input('disable-drag-ci') disableDragCI: boolean;
  @Input('fixed-width') fixedWidth: number;
  @Input('fixed-height') fixedHeight: number;
}

describe('ExportPlotsComponent', () => {
  let component: ExportPlotsComponent;
  let fixture: ComponentFixture<ExportPlotsComponent>;

  // dependencies
  let ngbActiveModalStub = {};
  let exportServiceStub = {
    formats: () => Promise.resolve({ formats: ["PNG"] })
  };

  // inputs
  let model = { output: "power" };
  let project = { getModel: (index: number) => model } as Project;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [ NgbModule, FormsModule ],
      declarations: [
        FormatFixedPipe,
        PlotStubComponent,
        BottomPlotStubComponent,
        ExportPlotsComponent
      ],
      providers: [
        { provide: NgbActiveModal, useValue: ngbActiveModalStub },
        { provide: ExportService, useValue: exportServiceStub },
        NgbTabsetConfig
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ExportPlotsComponent);
    component = fixture.componentInstance;
    component.project = project;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
