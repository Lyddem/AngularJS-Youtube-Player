  angular.module('video-player')

.directive('videoPlayer', function() {
  return {
  	scope: {
  		video: '='  
  	},
  	restrict: 'E',
    controllerAs: 'ctrl',
    bindToController: true,
  	controller: function (){

		this.getIframeSrc = function (videoId) {
  	return 'https://www.youtube.com/embed/' + videoId;
		};
  		console.log('video in the player')
  	},
  	templateUrl: 'src/templates/videoPlayer.html'
  }
});
