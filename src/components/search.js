angular.module('video-player')

.directive('search', function() {
  return {
    scope: {
    },
    restrict: 'E',
    controllerAs: 'ctrl',
    bindToController: true,
    controller: function () {
      this.result = () => {};      
    },

    templateUrl: 'src/templates/search.html'
  };
});
