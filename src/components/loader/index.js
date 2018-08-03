import angular from 'angular';
import template from './loader.html';
import './loader.scss';

function loader() {
  return {
    restrict: 'E',
    scope: false,
    template
  }
}

export default angular.module('loader.module', [])
  .directive('loader', loader)
  .name;
