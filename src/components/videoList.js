angular.module('video-player')
.directive('videoList', function() {
  return {
    scope: {
    	videos: '='
    },
    restrict: 'E',
    controllerAs: 'ctrl',
    bindToController: true,
    controller: function () {	
      console.log('videoList here')
      // this.videos =	console.log('this.videos in videoList component', this.videos);
      this.onClick = () => {};
    },
    templateUrl: 'src/templates/videoList.html'
  };
});
