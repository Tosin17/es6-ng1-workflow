routing.$inject = [
  '$urlRouterProvider',
  '$locationProvider',
  '$stateProvider'
];

export default function routing(
  $urlRouterProvider,
  $locationProvider,
  $stateProvider
) {
  $locationProvider.html5Mode(true);
  $urlRouterProvider.otherwise('/');
  $stateProvider.state('home', {
    url: '/',
    template: '<main-component></main-component>'
  })
}
