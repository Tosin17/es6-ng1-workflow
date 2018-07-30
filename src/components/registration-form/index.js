import angular from 'angular';
import template from './register.html';
import registrationFormController from './registrationFormController';
import './register.scss';

function registrationForm() {
  return {
    restrict: 'E',
    scope: {},
    controller: registrationFormController,
    template
  }
}

export default angular
  .module('registration.Form', [])
  .directive('registrationForm', registrationForm)
  .name;
