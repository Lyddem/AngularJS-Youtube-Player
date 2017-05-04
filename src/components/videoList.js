angular.module('video-player')
.directive('videoList', function() {
  return {
    scope: {

    },
    restrict: 'E',
    controllerAs: 'ctrl',
    bindToController: true,
    controller: function () {
      this.videos = [];
      this.onClick = () => {};
    },
    templateUrl: 'src/templates/videoList.html'
  };
});
