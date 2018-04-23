import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RoundPipe } from './round.pipe';
import { CeilPipe } from './ceil.pipe';
import { ReversePipe } from './reverse.pipe';
import { FormatFixedPipe } from './format-fixed.pipe';

import { DraggableDialogComponent } from './draggable-dialog/draggable-dialog.component';

@NgModule({
  imports: [ CommonModule ],
  declarations: [
    RoundPipe,
    CeilPipe,
    ReversePipe,
    FormatFixedPipe,
    DraggableDialogComponent,
  ],
  exports: [
    RoundPipe,
    CeilPipe,
    ReversePipe,
    FormatFixedPipe,
    DraggableDialogComponent,
  ],
})
export class AppCommonModule { }
