import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NgbNavModule } from '@ng-bootstrap/ng-bootstrap';

import { AppCommonModule } from './app-common.module';
import { TTestModule } from './t-test/t-test.module';
import { DichotModule } from './dichot/dichot.module';
import { AppComponent } from './app.component';
import { KonamiDirective } from './konami.directive';

import { ResizeService } from './resize.service';
import { CopyService } from './copy.service';
import { ExportService } from './export.service';
import { PaletteService } from './palette.service';
import { PlotOptionsService } from './plot-options.service';
import { AbstractProjectService } from './abstract-project.service';

import { environment } from '../environments/environment';
import { MenuComponent } from './menu/menu.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { MainComponent } from './main/main.component';
import { AbstractStartComponent } from './abstract-start.component';
import { AbstractProjectComponent } from './abstract-project.component';
import { ExportPlotsComponent } from './export-plots/export-plots.component';


const routes: Routes = [
  { path: '', component: WelcomeComponent },
];

@NgModule({
  declarations: [
    AppComponent,
    KonamiDirective,
    WelcomeComponent,
    MainComponent,
    AbstractStartComponent,
    AbstractProjectComponent,
  ],
  imports: [
    BrowserModule,
    CommonModule,
    FormsModule,
    BrowserAnimationsModule,
    RouterModule.forRoot(routes),
    HttpClientModule,
    NgbModule,
    NgbNavModule,
    AppCommonModule,
    TTestModule,
    DichotModule,
    MenuComponent,          // CHANGED: Import standalone component
    ExportPlotsComponent,   // CHANGED: Import standalone component
  ],
  bootstrap: [ AppComponent ],
  providers: [
    ResizeService,
    CopyService,
    ExportService,
    PaletteService,
    PlotOptionsService,
    AbstractProjectService
  ]
})
export class AppModule { }
