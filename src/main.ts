import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { UpgradeModule } from "@angular/upgrade/static";

import { Router } from "@angular/router";

import { AppModule } from './app/app.module';
import { environment } from './environments/environment';

import { initAngularjs } from './app/dashboard/ng1/angularjs';

if (environment.production) {
  enableProdMode();
}

// platformBrowserDynamic().bootstrapModule(AppModule);

// bootstrap Angular 1 application
initAngularjs();

platformBrowserDynamic().bootstrapModule(AppModule).then(platformRef => {
  const upgrade = platformRef.injector.get(UpgradeModule) as UpgradeModule;
  upgrade.bootstrap(document.documentElement, ['ganttModule']);
});
