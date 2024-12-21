import { Component } from '@angular/core';

@Component({
    selector: 'dashboard',
    template: `
      <div>
        <ng1Ganttwrapper></ng1Ganttwrapper>
    </div>`,
    standalone: false
})

export class DashboardComponent {
    constructor() {
    }
}
