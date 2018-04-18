import { BrowserModule } from '@angular/platform-browser';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

import { AppComponent } from './app.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { Ng1GanttwrapperDirective } from './dashboard/ng1/ng1.ganttwrapper.directive';
import { UpgradeModule } from "@angular/upgrade/static";
  

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    Ng1GanttwrapperDirective
  ],
  imports: [
    BrowserModule,
    UpgradeModule
  ],
  providers: [],
  // bootstrap: [AppComponent],
  entryComponents: [
    AppComponent
  ],
})
export class AppModule {
  ngDoBootstrap(): void {}
}

