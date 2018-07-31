import angular from 'angular';

function textFileReader() {
  return {
    restrict: 'A',
    scope: {
      fileReader: '=textFileReader'
    },
    link: ($scope, elem) => {
      elem.on('change', evt => {
        const file = evt.target.files;

        if (file.length) {
          const reader = new FileReader();
          reader.onload = evt => {
            const content = evt.target.result;
            $scope.$apply(() => {
              $scope.fileReader = content;
            })
          };
          reader.readAsText(file[0]);
        }
      })
    }
  }
}

export default angular
  .module('textFileReaderModule', [])
  .directive('textFileReader', textFileReader)
  .name;
