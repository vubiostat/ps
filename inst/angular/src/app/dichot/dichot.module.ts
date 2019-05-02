import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AppCommonModule } from '../app-common.module';

import { DichotService } from './dichot.service';
import { MainComponent } from './main/main.component';
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
    StartComponent,
    PlotOptionsComponent,
    ProjectComponent,
    ProjectModelComponent,
    MainComponent
  ],
  providers: [
    DichotService
  ]
})
export class DichotModule { }
