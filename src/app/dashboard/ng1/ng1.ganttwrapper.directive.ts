import { Directive, ElementRef, Injector } from '@angular/core';
import { UpgradeComponent } from '@angular/upgrade/static';

@Directive({selector: 'ng1Ganttwrapper'})
export class Ng1GanttwrapperDirective extends UpgradeComponent {
  constructor(elementRef: ElementRef, injector: Injector) {
    super('ganttcomp', elementRef, injector);
  }
}
