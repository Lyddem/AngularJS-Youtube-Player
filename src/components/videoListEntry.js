	angular.module('video-player')

.directive('videoListEntry', function($rootScope) {
  return {
    
    scope: {
    	video: '='
    },
    restrict: 'E',
    controllerAs: 'ctrl',
    bindToController: true,
    controller: function() {
    	this.titleClick = () => {
    		//call selectVideo
    		$rootScope.$broadcast('selectedTitle', this.video);
    	}
    },
    templateUrl:'src/templates/videoListEntry.html'
  };
});
