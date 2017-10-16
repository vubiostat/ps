import { BrowserModule } from '@angular/platform-browser';
import { APP_BASE_HREF } from '@angular/common';
import { NgModule      } from '@angular/core';
import { NgbModule     } from '@ng-bootstrap/ng-bootstrap';
import { TTestModule   } from './t-test/t-test.module';
import { AppComponent  } from './app.component';
import { environment   } from '../environments/environment';

@NgModule({
  declarations: [ AppComponent ],
  imports: [
    BrowserModule,
    NgbModule.forRoot(),
    TTestModule
  ],
  providers: [
    { provide: APP_BASE_HREF, useValue: environment.baseHref }
  ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
