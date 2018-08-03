import angular from 'angular';
import template from './main.html';
import sideNav from '../side-nav';
import registrationForm from '../registration-form';
import textFileReader from '../text-file-reader';
import flashBanner from  '../flash-banner';
import weatherService from '../../services/weather-service'
import fileService from '../../services/file-service'
import  loader from '../loader'
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
    registrationForm,
    textFileReader,
    flashBanner,
    weatherService,
    fileService,
    loader
  ])
  .directive('mainComponent', mainComponent)
  .name;
