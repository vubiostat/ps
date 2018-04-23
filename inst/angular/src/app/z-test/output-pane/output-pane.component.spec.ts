import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Component, Input } from '@angular/core';
import { NgbModule, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { PlotOptionsService } from '../plot-options.service';
import { PaletteService } from '../../palette.service';
import { Project } from '../project';
import { OutputPaneComponent } from './output-pane.component';

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

describe('OutputPaneComponent', () => {
  let component: OutputPaneComponent;
  let fixture: ComponentFixture<OutputPaneComponent>;

  let ngbModalStackStub = {};
  let plotOptionsServiceStub = {};
  let paletteServiceStub = {};

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [ NgbModule ],
      declarations: [
        PlotStubComponent,
        BottomPlotStubComponent,
        OutputPaneComponent
      ],
      providers: [
        { provide: NgbModal, useValue: ngbModalStackStub },
        { provide: PlotOptionsService, useValue: plotOptionsServiceStub },
        { provide: PaletteService, useValue: paletteServiceStub },
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OutputPaneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
