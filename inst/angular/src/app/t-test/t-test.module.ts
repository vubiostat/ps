import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { AppCommonModule } from '../app-common.module';
import { MainComponent } from '../main/main.component';
import { ProjectType } from '../project-type';

import { TTestService } from './t-test.service';

import { StartComponent } from './start/start.component';
import { ProjectComponent } from './project/project.component';
import { ProjectModelComponent } from './project-model/project-model.component';

import { TTestKind } from './t-test';

const routes: Routes = [
  {
    path: 't-test/paired',
    component: MainComponent,
    data: { type: ProjectType.TTestPaired },
    children: [
      { path: '', component: StartComponent, data: { kind: TTestKind.Paired } },
      { path: ':id', component: ProjectComponent, data: { type: ProjectType.TTestPaired } }
    ]
  },
  {
    path: 't-test/ind',
    component: MainComponent,
    data: { type: ProjectType.TTestIndependent },
    children: [
      { path: '', component: StartComponent, data: { kind: TTestKind.Independent } },
      { path: ':id', component: ProjectComponent, data: { type: ProjectType.TTestIndependent } }
    ]
  },
  {
    path: 'z-test',
    component: MainComponent,
    data: { type: ProjectType.ZTest },
    children: [
      { path: '', component: StartComponent, data: { kind: TTestKind.ZTest } },
      { path: ':id', component: ProjectComponent, data: { type: ProjectType.ZTest } }
    ]
  }
];

@NgModule({
  declarations: [
    StartComponent,
    ProjectComponent,
    ProjectModelComponent
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
    TTestService
  ]
})
export class TTestModule { }
