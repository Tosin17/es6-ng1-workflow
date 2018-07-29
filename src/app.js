import angular from 'angular';
import uiRouter from 'angular-ui-router';

import mainComponent from './components/main/';
import routing from './app.config';


angular
  .module('app', [
    uiRouter,
    mainComponent
  ])
  .config(routing);
