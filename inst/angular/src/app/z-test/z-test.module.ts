import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AppCommonModule } from '../app-common.module';

import { ZTestService } from './z-test.service';
import { ProjectFactoryService } from './project-factory.service';

import { ZTestComponent } from './z-test.component';
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
  { path: 'z-test', component: ZTestComponent },
];

@NgModule({
  declarations: [
    ZTestComponent,
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
    ZTestService,
    ProjectFactoryService
  ],
  entryComponents: [
    ExportPlotsComponent
  ]
})
export class ZTestModule { }
