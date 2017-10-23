import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { TTestModule } from './t-test/t-test.module';
import { AppComponent } from './app.component';

const routes: Routes = [
  { path: '', redirectTo: '/t-test', pathMatch: 'full' },
];

@NgModule({
  declarations: [ AppComponent ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes),
    NgbModule.forRoot(),
    TTestModule
  ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
