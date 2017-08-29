import { BrowserModule } from '@angular/platform-browser';
import { APP_BASE_HREF } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { AppComponent } from './app.component';
import { TTestService } from './t-test.service';
import { PlotOptionsService } from './plot-options.service';
import { PaletteService } from './palette.service';

import { StartComponent } from './start/start.component';
import { RangeSliderComponent, RangeSliderLabel, RangeSliderHelp } from './range-slider/range-slider.component';
import { TTestComponent } from './t-test/t-test.component';
import { OutputPaneComponent } from './output-pane/output-pane.component';
import { HelpComponent } from './help/help.component';
import { PlotOptionsComponent } from './plot-options/plot-options.component';
import { PlotComponent } from './plot/plot.component';
import { BottomPlotComponent } from './bottom-plot/bottom-plot.component';
import { SerializePlotComponent } from './serialize-plot.component';
import { ExportPlotsComponent } from './export-plots/export-plots.component';
import { DraggableDialogComponent } from './draggable-dialog/draggable-dialog.component';

import { environment } from '../environments/environment';

@NgModule({
  declarations: [
    AppComponent,
    StartComponent,
    RangeSliderComponent,
    RangeSliderLabel,
    RangeSliderHelp,
    TTestComponent,
    OutputPaneComponent,
    HelpComponent,
    PlotOptionsComponent,
    PlotComponent,
    BottomPlotComponent,
    SerializePlotComponent,
    ExportPlotsComponent,
    DraggableDialogComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    NgbModule.forRoot()
  ],
  providers: [
    TTestService,
    PlotOptionsService,
    PaletteService,
    {provide: APP_BASE_HREF, useValue: environment.baseHref }
  ],
  bootstrap: [AppComponent],
  entryComponents: [ExportPlotsComponent]
})
export class AppModule { }
