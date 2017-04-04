import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { AppComponent } from './app.component';
import { PlotService } from './plot.service';
import { StartComponent } from './start/start.component';

@NgModule({
  declarations: [
    AppComponent,
    StartComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    NgbModule.forRoot()
  ],
  providers: [PlotService],
  bootstrap: [AppComponent]
})
export class AppModule { }
