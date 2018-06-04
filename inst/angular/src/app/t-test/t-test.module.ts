import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AppCommonModule } from '../app-common.module';

import { TTestService } from './t-test.service';
import { ProjectService } from './project.service';

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

import { TTestKind } from './t-test';

const routes: Routes = [
  { path: 't-test/paired', component: TTestComponent, data: { kind: TTestKind.Paired } },
  { path: 't-test/ind',    component: TTestComponent, data: { kind: TTestKind.Independent } },
  { path: 'z-test',        component: TTestComponent, data: { kind: TTestKind.ZTest } }
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
    HttpClientModule,
    NgbModule,
    RouterModule.forChild(routes),
    AppCommonModule
  ],
  providers: [
    TTestService,
    ProjectService
  ],
  entryComponents: [
    ExportPlotsComponent
  ]
})
export class TTestModule { }
