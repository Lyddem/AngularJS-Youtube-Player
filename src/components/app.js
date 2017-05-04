angular.module('video-player')

.directive('app', function() {
    return {
      scope: {
      },
      restrict: 'E',
      controllerAs: 'ctrl',
      bindToController: true,
      controller: function() {
        this.selectVideo = () => {};
        this.searchResults = () => {};
        this.currentVideo = {};
        this.videos = [];
      },
      templateUrl: 'src/templates/app.html'
    }
});

