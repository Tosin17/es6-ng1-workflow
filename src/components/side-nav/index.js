import angular from 'angular';
import template from './side-nav.html';
import './side-nav.scss';

function sideNav() {
  return {
    restrict: 'E',
    scope: {},
    template
  }
}

export default angular.module('sideNav.Component', [])
  .directive('sideNav', sideNav)
  .name;
