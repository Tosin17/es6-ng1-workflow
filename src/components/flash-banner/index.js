import angular from 'angular';
import template from './flash-banner.html';
import controller from './flashBannerController';
import './flash-banner.scss';

function flashBanner() {
  return {
    restrict: 'E',
    scope: false,
    template,
    controller
  }
}

export default angular.module('flashBanner.module', [])
  .directive('flashBanner', flashBanner)
  .name;
