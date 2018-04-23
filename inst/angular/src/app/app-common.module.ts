import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { RoundPipe } from './round.pipe';
import { CeilPipe } from './ceil.pipe';
import { ReversePipe } from './reverse.pipe';
import { FormatFixedPipe } from './format-fixed.pipe';

import { DraggableDialogComponent } from './draggable-dialog/draggable-dialog.component';
import { RangeSliderComponent, RangeSliderLabel, RangeSliderHelp } from './range-slider/range-slider.component';

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
  ],
})
export class AppCommonModule { }
