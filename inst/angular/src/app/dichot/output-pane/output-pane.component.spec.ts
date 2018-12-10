import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { Component, Input } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { PlotOptionsService } from '../../plot-options.service';
import { PaletteService } from '../../palette.service';
import { CopyService } from '../../copy.service';
import { OutputPaneComponent } from './output-pane.component';

@Component({selector: 'dichot-plot', template: ''})
class DichotPlotStubComponent {
  @Input() name: any;
  @Input('project') project: any;
  @Input('hover-disabled') hoverDisabled: any;
}

@Component({selector: 'dichot-bottom-plot', template: ''})
class DichotBottomPlotStubComponent {
  @Input() name: any;
  @Input('project') project: any;
  @Input('disable-drag-target') disableDragTarget: any;
  @Input('disable-drag-ci') disableDragCi: any;
}

describe('dichot.OutputPaneComponent', () => {
  let component: OutputPaneComponent;
  let fixture: ComponentFixture<OutputPaneComponent>;
  let plotOptionsServiceStub = {};
  let paletteServiceStub = {};
  let copyServiceStub = {};

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [ NgbModule ],
      declarations: [
        DichotPlotStubComponent,
        DichotBottomPlotStubComponent,
        OutputPaneComponent
      ],
      providers: [
        { provide: PlotOptionsService, useValue: plotOptionsServiceStub },
        { provide: PaletteService, useValue: paletteServiceStub },
        { provide: CopyService, useValue: copyServiceStub }
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
