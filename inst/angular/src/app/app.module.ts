import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

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

import { environment } from '../environments/environment';
import { MenuComponent } from './menu/menu.component';
import { WelcomeComponent } from './welcome/welcome.component';

const routes: Routes = [
  { path: '', component: WelcomeComponent },
];

@NgModule({
  declarations: [
    AppComponent,
    KonamiDirective,
    MenuComponent,
    WelcomeComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    RouterModule.forRoot(routes),
    HttpClientModule,
    NgbModule.forRoot(),
    AppCommonModule,
    TTestModule,
    DichotModule
  ],
  bootstrap: [ AppComponent ],
  providers: [
    ResizeService,
    CopyService,
    ExportService,
    PaletteService,
    PlotOptionsService
  ]
})
export class AppModule { }
