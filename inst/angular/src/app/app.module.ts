import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { APP_BASE_HREF } from '@angular/common';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { AppCommonModule } from './app-common.module';
import { TTestModule } from './t-test/t-test.module';
import { ZTestModule } from './z-test/z-test.module';
import { AppComponent } from './app.component';
import { KonamiDirective } from './konami.directive';
import { ExportService } from './export.service';

import { environment } from '../environments/environment';

const routes: Routes = [
  { path: '', redirectTo: '/t-test', pathMatch: 'full' },
];

@NgModule({
  declarations: [
    AppComponent,
    KonamiDirective,
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes),
    NgbModule.forRoot(),
    AppCommonModule,
    TTestModule,
    ZTestModule
  ],
  bootstrap: [ AppComponent ],
  providers: [
    { provide: APP_BASE_HREF, useValue: environment.baseHref },
    ExportService
  ]
})
export class AppModule { }
