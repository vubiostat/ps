import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { TTestService } from './t-test.service';
import { PlotOptionsService } from './plot-options.service';
import { PaletteService } from './palette.service';
import { ProjectFactoryService } from './project-factory.service';
import { ExportService } from './export.service';

import { TTestComponent } from './t-test.component';
import { StartComponent } from './start/start.component';
import { RangeSliderComponent, RangeSliderLabel, RangeSliderHelp } from './range-slider/range-slider.component';
import { ProjectComponent } from './project/project.component';
import { OutputPaneComponent } from './output-pane/output-pane.component';
import { HelpComponent } from './help/help.component';
import { PlotOptionsComponent } from './plot-options/plot-options.component';
import { PlotComponent } from './plot/plot.component';
import { BottomPlotComponent } from './bottom-plot/bottom-plot.component';
import { ExportPlotsComponent } from './export-plots/export-plots.component';
import { DraggableDialogComponent } from './draggable-dialog/draggable-dialog.component';

import { RoundPipe } from './round.pipe';
import { CeilPipe } from './ceil.pipe';
import { ReversePipe } from './reverse.pipe';
import { FormatFixedPipe } from './format-fixed.pipe';

const routes: Routes = [
  { path: 't-test', component: TTestComponent },
];

@NgModule({
  declarations: [
    TTestComponent,
    StartComponent,
    RangeSliderComponent,
    RangeSliderLabel,
    RangeSliderHelp,
    ProjectComponent,
    OutputPaneComponent,
    HelpComponent,
    PlotOptionsComponent,
    PlotComponent,
    BottomPlotComponent,
    ExportPlotsComponent,
    DraggableDialogComponent,
    RoundPipe,
    CeilPipe,
    ReversePipe,
    FormatFixedPipe,
  ],
  imports: [
    CommonModule,
    FormsModule,
    HttpModule,
    NgbModule,
    RouterModule.forChild(routes)
  ],
  providers: [
    TTestService,
    PlotOptionsService,
    PaletteService,
    ProjectFactoryService,
    ExportService
  ],
  entryComponents: [
    ExportPlotsComponent
  ]
})
export class TTestModule { }
