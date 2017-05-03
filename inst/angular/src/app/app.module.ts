import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { AppComponent } from './app.component';
import { TTestService } from './t-test.service';
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
  providers: [TTestService],
  bootstrap: [AppComponent]
})
export class AppModule { }
