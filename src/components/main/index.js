import angular from 'angular';
import template from './main.html';
import sideNav from '../side-nav';
import registrationForm from '../registration-form';
import './main.scss';

function mainComponent() {
  return {
    restrict: 'E',
    scope: {},
    template
  }
}

export default angular
  .module('main.component', [
    sideNav,
    registrationForm
  ])
  .directive('mainComponent', mainComponent)
  .name;
