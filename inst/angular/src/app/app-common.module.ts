import { NgModule } from '@angular/core';

import { RoundPipe } from './round.pipe';
import { CeilPipe } from './ceil.pipe';
import { ReversePipe } from './reverse.pipe';
import { FormatFixedPipe } from './format-fixed.pipe';

@NgModule({
  declarations: [
    RoundPipe,
    CeilPipe,
    ReversePipe,
    FormatFixedPipe,
  ],
  exports: [
    RoundPipe,
    CeilPipe,
    ReversePipe,
    FormatFixedPipe,
  ],
})
export class AppCommonModule { }
