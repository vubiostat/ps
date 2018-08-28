import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AppCommonModule } from '../app-common.module';

import { DichotService } from './dichot.service';
import { ExportPlotsComponent } from './export-plots/export-plots.component';
import { HelpComponent } from './help/help.component';
import { MainComponent } from './main/main.component';
import { OutputPaneComponent } from './output-pane/output-pane.component';
import { PlotComponent } from './plot/plot.component';
import { BottomPlotComponent } from './bottom-plot/bottom-plot.component';
import { PlotOptionsComponent } from './plot-options/plot-options.component';
import { ProjectComponent } from './project/project.component';
import { ProjectModelComponent } from './project-model/project-model.component';
import { StartComponent } from './start/start.component';

const routes: Routes = [
  { path: 'dichot', component: MainComponent },
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    HttpClientModule,
    NgbModule,
    RouterModule.forChild(routes),
    AppCommonModule
  ],
  declarations: [
    StartComponent, OutputPaneComponent, PlotComponent, BottomPlotComponent,
    ExportPlotsComponent, HelpComponent, PlotOptionsComponent,
    ProjectComponent, ProjectModelComponent, MainComponent
  ],
  providers: [
    DichotService
  ],
  entryComponents: [
    ExportPlotsComponent
  ]
})
export class DichotModule { }
