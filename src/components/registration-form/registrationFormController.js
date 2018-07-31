export default class RegistrationFormController {
  constructor($scope, $timeout) {
    $scope.formValues = {};
    $scope.fileContent = null;

    $scope.submitForm = () => {
      $timeout(() => this
        .submit($scope.formValues), 500);
    };

    $scope.$watch('fileContent', val => {
      if (!val) return;

      console.log(val);
    })

  }

  submit(formFields) {
    console.log(formFields);
  }
}

RegistrationFormController.$inject = [
  '$scope',
  '$timeout'
];
