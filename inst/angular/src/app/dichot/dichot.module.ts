import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { AppCommonModule } from '../app-common.module';
import { MainComponent } from '../main/main.component';
import { ProjectType } from '../project-type';

import { DichotService } from './dichot.service';
import { StartComponent } from './start/start.component';
import { ProjectComponent } from './project/project.component';
import { ProjectModelComponent } from './project-model/project-model.component';

const routes: Routes = [
  {
    path: 'dichot',
    component: MainComponent,
    data: { type: ProjectType.Dichot },
    children: [
      { path: '', component: StartComponent },
      { path: ':id', component: ProjectComponent }
    ]
  },
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
    ProjectComponent,
    ProjectModelComponent,
  ],
  providers: [
    DichotService
  ]
})
export class DichotModule { }
