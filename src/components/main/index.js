import angular from 'angular';
import template from './main.html';
import sideNav from '../side-nav';
import './main.scss';

function mainComponent() {
  return {
    restrict: 'E',
    scope: {},
    template
  }
}

export default angular
  .module('main.component', [sideNav])
  .directive('mainComponent', mainComponent)
  .name;
