import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { Component, Input } from '@angular/core';

import { FormsModule } from '@angular/forms';
import { NgbModule, NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { ExportService } from '../../export.service';
import { ExportPlotsComponent } from './export-plots.component';

@Component({selector: 'dichot-plot', template: ''})
class DichotPlotStubComponent {
  @Input() project: any;
  @Input('hover-disabled') hoverDisabled: any;
  @Input('disable-drag') disableDrag: any;
  @Input('hide-drop-lines') hideDropLines: any;
  @Input('hide-target') hideTarget: any;
  @Input('fixed-width') fixedWidth: any;
  @Input('fixed-height') fixedHeight: any;
  @Input('legend-x-offset') legendXOffset: any;
  @Input('legend-y-offset') legendYOffset: any;
}

@Component({selector: 'dichot-bottom-plot', template: ''})
class DichotBottomPlotStubComponent {
  @Input() name: any;
  @Input() project: any;
  @Input('disable-drag-target') disableDragTarget: any;
  @Input('disable-drag-ci') disableDragCi: any;
  @Input('fixed-width') fixedWidth: any;
  @Input('fixed-height') fixedHeight: any;
}

describe('dichot.ExportPlotsComponent', () => {
  let component: ExportPlotsComponent;
  let fixture: ComponentFixture<ExportPlotsComponent>;
  let project: any;

  let formatsStub = {
    subscribe: function(callback) {
      callback({ formats: ["PNG"] });
    }
  };
  let exportServiceStub = {
    formats: () => formatsStub
  };

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        FormsModule,
        NgbModule
      ],
      declarations: [
        DichotPlotStubComponent,
        DichotBottomPlotStubComponent,
        ExportPlotsComponent
      ],
      providers: [
        NgbActiveModal,
        { provide: ExportService, useValue: exportServiceStub }
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    project = {
      getOutput: () => "sampleSize"
    };

    fixture = TestBed.createComponent(ExportPlotsComponent);
    component = fixture.componentInstance;
    component.project = project;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
