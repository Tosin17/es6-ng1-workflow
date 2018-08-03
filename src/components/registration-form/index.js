import angular from 'angular';
import template from './register.html';
import controller from './registrationFormController';
import './register.scss';

function registrationForm() {
  return {
    restrict: 'E',
    scope: false,
    controller,
    template
  }
}

export default angular
  .module('registration.Form', [])
  .directive('registrationForm', registrationForm)
  .name;
