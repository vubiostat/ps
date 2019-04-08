import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { RoundPipe } from './round.pipe';
import { CeilPipe } from './ceil.pipe';
import { ReversePipe } from './reverse.pipe';
import { FormatFixedPipe } from './format-fixed.pipe';

import { DraggableDialogComponent } from './draggable-dialog/draggable-dialog.component';
import { RangeSliderComponent, RangeSliderLabel, RangeSliderHelp } from './range-slider/range-slider.component';
import { LinePlotComponent } from './line-plot/line-plot.component';
import { CIPlotComponent } from './ci-plot/ci-plot.component';

@NgModule({
  imports: [ CommonModule, NgbModule ],
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
    CIPlotComponent
  ],
})
export class AppCommonModule { }
