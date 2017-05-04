	angular.module('video-player')

.directive('videoListEntry', function() {
  return {
    // TODO
    scope: {
    	video: '='
    },
    restrict: 'E',
    controllerAs: 'ctrl',
    bindToController: true,
    controller: function() {
    	// this.video = {}; //can reference ctrl in videoList here?
    this.video = window.exampleVideoData;
    console.log(this.video);
    },
    templateUrl:'src/templates/videoListEntry.html'
  };
});
