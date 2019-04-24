import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { RoundPipe } from './round.pipe';
import { CeilPipe } from './ceil.pipe';
import { ReversePipe } from './reverse.pipe';
import { FormatFixedPipe } from './format-fixed.pipe';

import { DraggableDialogComponent } from './draggable-dialog/draggable-dialog.component';
import { RangeSliderComponent, RangeSliderLabel, RangeSliderHelp } from './range-slider/range-slider.component';
import { LinePlotComponent } from './line-plot/line-plot.component';
import { CIPlotComponent } from './ci-plot/ci-plot.component';
import { OutputPaneComponent } from './output-pane/output-pane.component';
import { ExportPlotsComponent } from './export-plots/export-plots.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    NgbModule
  ],
  declarations: [
    RoundPipe,
    CeilPipe,
    ReversePipe,
    FormatFixedPipe,
    DraggableDialogComponent,
    RangeSliderComponent,
    RangeSliderLabel,
    RangeSliderHelp,
    LinePlotComponent,
    CIPlotComponent,
    OutputPaneComponent,
    ExportPlotsComponent
  ],
  exports: [
    RoundPipe,
    CeilPipe,
    ReversePipe,
    FormatFixedPipe,
    DraggableDialogComponent,
    RangeSliderComponent,
    RangeSliderLabel,
    RangeSliderHelp,
    LinePlotComponent,
    CIPlotComponent,
    OutputPaneComponent
  ],
  entryComponents: [
    ExportPlotsComponent
  ]
})
export class AppCommonModule { }
