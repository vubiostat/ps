import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { AppComponent } from './app.component';
import { PlotService } from './plot.service';
import { CalcService } from './calc.service';
import { StartComponent } from './start/start.component';
import { TTestComponent } from './t-test/t-test.component';
import { OutputPaneComponent } from './output-pane/output-pane.component';
import { HelpComponent } from './help/help.component';

@NgModule({
  declarations: [
    AppComponent,
    StartComponent,
    TTestComponent,
    OutputPaneComponent,
    HelpComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    NgbModule.forRoot()
  ],
  providers: [PlotService, CalcService],
  bootstrap: [AppComponent]
})
export class AppModule { }
