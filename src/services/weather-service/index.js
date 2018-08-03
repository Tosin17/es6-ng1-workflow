import angular from  'angular';

class weatherService {
  constructor($http) {
    this.http = $http;
    this.weatherApiUrl = 'http://api.openweathermap.org/data/2.5/weather?q=';
    this.weatherApiKey = '&appid=' + '188946ef3a1a518080641674e6ddeaed';
  }

  getWeather(city, country) {
    return this.http({
      method: 'GET',
      url: `${this.weatherApiUrl}${city},${country}${this.weatherApiKey}`,
    }).then(function (response) {
      return response;
    }, function (reason) {
      return reason;
    })
  }
}

weatherService.$inject = ['$http'];

export default angular.module('weatherService.module', [])
  .service('weatherService', weatherService)
  .name;
