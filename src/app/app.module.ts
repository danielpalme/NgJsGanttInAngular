import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { setAngularJSGlobal, UpgradeModule } from '@angular/upgrade/static';
import * as angular from 'angular';
import { AppComponent } from './app.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { Ng1GanttwrapperDirective } from './dashboard/ng1/ng1.ganttwrapper.directive';

@NgModule({
  imports: [
    BrowserModule,
    UpgradeModule
  ],
  declarations: [
    AppComponent,
    DashboardComponent,
    Ng1GanttwrapperDirective
  ],
  entryComponents: [
     AppComponent
  ],
})
export class AppModule {
  constructor(private upgrade: UpgradeModule) {}

  ngDoBootstrap() {
    setAngularJSGlobal(angular);
    this.upgrade.bootstrap(document.body, ['ganttModule']);
  }
}