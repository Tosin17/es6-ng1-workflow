import angular from 'angular';
import _ from 'lodash';

class fileService {

  countLetters(fileContent) {
    const words = _.words(fileContent);
    return `This file has ${words.length} words`;
  }

}

export default angular.module('fileService.module', [])
  .service('fileService', fileService)
  .name;
