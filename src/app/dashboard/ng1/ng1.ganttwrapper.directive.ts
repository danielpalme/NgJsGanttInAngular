import { Directive, ElementRef, Injector } from '@angular/core';
import { downgradeComponent, UpgradeComponent } from '@angular/upgrade/static';
import * as angular from 'angular';
import 'angular-gantt';
import { AppComponent } from '../../app.component';

const ng1Component = {
  controller: function() {
    this.data = [
      // Order is optional. If not specified it will be assigned automatically
      {name: 'Milestones', height: '3em', sortable: false, classes: 'gantt-row-milestone', color: '#45607D', tasks: [
          // Dates can be specified as string, timestamp or javascript date object. The data attribute can be used to attach a custom object
          {name: 'Kickoff', color: '#93C47D', from: '2013-10-07T09:00:00', to: '2013-10-07T10:00:00', data: 'Can contain any custom data or object'},
          {name: 'Concept approval', color: '#93C47D', from: new Date(2013, 9, 18, 18, 0, 0), to: new Date(2013, 9, 18, 18, 0, 0), est: new Date(2013, 9, 16, 7, 0, 0), lct: new Date(2013, 9, 19, 0, 0, 0)},
          {name: 'Development finished', color: '#93C47D', from: new Date(2013, 10, 15, 18, 0, 0), to: new Date(2013, 10, 15, 18, 0, 0)},
          {name: 'Shop is running', color: '#93C47D', from: new Date(2013, 10, 22, 12, 0, 0), to: new Date(2013, 10, 22, 12, 0, 0)},
          {name: 'Go-live', color: '#93C47D', from: new Date(2013, 10, 29, 16, 0, 0), to: new Date(2013, 10, 29, 16, 0, 0)}
      ], data: 'Can contain any custom data or object'},
      {name: 'Status meetings', tasks: [
          {name: 'Demo #1', color: '#9FC5F8', from: new Date(2013, 9, 25, 15, 0, 0), to: new Date(2013, 9, 25, 18, 30, 0)},
          {name: 'Demo #2', color: '#9FC5F8', from: new Date(2013, 10, 1, 15, 0, 0), to: new Date(2013, 10, 1, 18, 0, 0)},
          {name: 'Demo #3', color: '#9FC5F8', from: new Date(2013, 10, 8, 15, 0, 0), to: new Date(2013, 10, 8, 18, 0, 0)},
          {name: 'Demo #4', color: '#9FC5F8', from: new Date(2013, 10, 15, 15, 0, 0), to: new Date(2013, 10, 15, 18, 0, 0)},
          {name: 'Demo #5', color: '#9FC5F8', from: new Date(2013, 10, 24, 9, 0, 0), to: new Date(2013, 10, 24, 10, 0, 0)}
      ]},
      {name: 'Kickoff', movable: {allowResizing: false}, tasks: [
          {name: 'Day 1', color: '#9FC5F8', from: new Date(2013, 9, 7, 9, 0, 0), to: new Date(2013, 9, 7, 17, 0, 0),
              progress: {percent: 100, color: '#3C8CF8'}, movable: false},
          {name: 'Day 2', color: '#9FC5F8', from: new Date(2013, 9, 8, 9, 0, 0), to: new Date(2013, 9, 8, 17, 0, 0),
              progress: {percent: 100, color: '#3C8CF8'}},
          {name: 'Day 3', color: '#9FC5F8', from: new Date(2013, 9, 9, 8, 30, 0), to: new Date(2013, 9, 9, 12, 0, 0),
              progress: {percent: 100, color: '#3C8CF8'}}
      ]},
      {name: 'Create concept', tasks: [
          {name: 'Create concept', priority: 20, content: '<i class="fa fa-cog" ng-click="scope.handleTaskIconClick(task.model)"></i> {{task.model.name}}', color: '#F1C232', from: new Date(2013, 9, 10, 8, 0, 0), to: new Date(2013, 9, 16, 18, 0, 0), est: new Date(2013, 9, 8, 8, 0, 0), lct: new Date(2013, 9, 18, 20, 0, 0),
              progress: 100}
      ]},
      {name: 'Finalize concept', tasks: [
          {id: 'Finalize concept', name: 'Finalize concept', priority: 10, color: '#F1C232', from: new Date(2013, 9, 17, 8, 0, 0), to: new Date(2013, 9, 18, 18, 0, 0),
              progress: 100}
      ]},
      {name: 'Development', children: ['Sprint 1', 'Sprint 2', 'Sprint 3', 'Sprint 4'], content: '<i class="fa fa-file-code-o" ng-click="scope.handleRowIconClick(row.model)"></i> {{row.model.name}}'},
      {name: 'Sprint 1', tooltips: false, tasks: [
          {id: 'Product list view', name: 'Product list view', color: '#F1C232', from: new Date(2013, 9, 21, 8, 0, 0), to: new Date(2013, 9, 25, 15, 0, 0),
              progress: 25, dependencies: [{to: 'Order basket'}, {from: 'Finalize concept'}]}
      ]},
      {name: 'Sprint 2', tasks: [
          {id: 'Order basket', name: 'Order basket', color: '#F1C232', from: new Date(2013, 9, 28, 8, 0, 0), to: new Date(2013, 10, 1, 15, 0, 0),
              dependencies: {to: 'Checkout', connectParameters: {endpoint: ['Rectangle', {width: 12, height: 12}]}}}
      ]},
      {name: 'Sprint 3', tasks: [
          {id: 'Checkout', name: 'Checkout', color: '#F1C232', from: new Date(2013, 10, 4, 8, 0, 0), to: new Date(2013, 10, 8, 15, 0, 0),
              dependencies: {to: 'Login & Signup & Admin Views'}}
      ]},
      {name: 'Sprint 4', tasks: [
          {id: 'Login & Signup & Admin Views', name: 'Login & Signup & Admin Views', color: '#F1C232', from: new Date(2013, 10, 11, 8, 0, 0), to: new Date(2013, 10, 15, 15, 0, 0),
              dependencies: [{to: 'HW'}, {to: 'SW / DNS/ Backups'}]}
      ]}
  ];
  },
  template: 'Hello from angular 1! <br /><div gantt data="$ctrl.data"></div>'
};

angular.
  module('ganttModule', ['gantt']).
  component('ganttcomp', ng1Component).
  directive('appRoot', downgradeComponent({component: AppComponent}));

@Directive({selector: 'ng1Ganttwrapper'})
export class Ng1GanttwrapperDirective extends UpgradeComponent {
  constructor(elementRef: ElementRef, injector: Injector) {
    super('ganttcomp', elementRef, injector);
  }
}
