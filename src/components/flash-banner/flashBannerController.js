export default class FlashBannerController {
  constructor($scope, $rootScope, $timeout) {

    $rootScope.$on('flashMessage', (event, display) => {
      $scope.type = display.type ? this.displayBanner(display, $scope) : null;
      this.hideBanner($scope, $timeout);
    });
  }

  displayBanner(display, $scope) {
    if (!display.message) {
      return false;
    }
    $scope.message = display.message;
    return display.type;
  }

  hideBanner($scope, $timeout) {
    if ($scope.type || $scope.message) {
      $timeout(() => {
        $scope.type = null;
        $scope.message = null;
      }, 3000)
    }
  }
}

FlashBannerController.$inject = [
  '$scope',
  '$rootScope',
  '$timeout'
];
