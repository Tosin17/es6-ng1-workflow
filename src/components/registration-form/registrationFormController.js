export default class RegistrationFormController {
  constructor(
    $scope,
    $timeout,
    $rootScope,
    weatherService,
    fileService
  ) {

    $scope.formValues = {};
    $scope.fileContent = null;

    $scope.submitForm = () => {
      $timeout(() => this
        .submit($scope.formValues, weatherService), 500);
      $rootScope.$broadcast('flashMessage', {type: 'success', message: 'Successfully Submitted'});
    };

    // Check if fileContent is truthy, then log its value
    $scope.$watch('fileContent', val => {
      if (!val) return;
      console.log(fileService.countLetters(val));
    })

  }

  submit(formFields, weatherService) {
    const city = 'lagos';
    const country = 'Nigeria';

    weatherService
      .getWeather(city, country)
      .then(function (response) {
        console.log(response);
      }, function (reason) {
        console.log(reason);
      });
  }
}

RegistrationFormController.$inject = [
  '$scope',
  '$timeout',
  '$rootScope',
  'weatherService',
  'fileService'
];
