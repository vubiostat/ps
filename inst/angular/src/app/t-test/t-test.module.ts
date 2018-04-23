import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AppCommonModule } from '../app-common.module';

import { TTestService } from './t-test.service';
import { PlotOptionsService } from './plot-options.service';
import { ProjectFactoryService } from './project-factory.service';

import { TTestComponent } from './t-test.component';
import { StartComponent } from './start/start.component';
import { ProjectComponent } from './project/project.component';
import { OutputPaneComponent } from './output-pane/output-pane.component';
import { HelpComponent } from './help/help.component';
import { PlotOptionsComponent } from './plot-options/plot-options.component';
import { PlotComponent } from './plot/plot.component';
import { BottomPlotComponent } from './bottom-plot/bottom-plot.component';
import { ExportPlotsComponent } from './export-plots/export-plots.component';
import { ProjectModelComponent } from './project-model/project-model.component';

const routes: Routes = [
  { path: 't-test', component: TTestComponent },
];

@NgModule({
  declarations: [
    TTestComponent,
    StartComponent,
    ProjectComponent,
    OutputPaneComponent,
    HelpComponent,
    PlotOptionsComponent,
    PlotComponent,
    BottomPlotComponent,
    ExportPlotsComponent,
    ProjectModelComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    HttpModule,
    NgbModule,
    RouterModule.forChild(routes),
    AppCommonModule
  ],
  providers: [
    TTestService,
    PlotOptionsService,
    ProjectFactoryService
  ],
  entryComponents: [
    ExportPlotsComponent
  ]
})
export class TTestModule { }
