  angular.module('video-player')

.directive('app', function($rootScope, $scope) {
    return {
      scope: {

      },
      restrict: 'E',
      controllerAs: 'ctrl',
      bindToController: true,
      controller: function() {
        $rootScope.$on('selectedTitle', function(selectedVideo){
          alert('video is being changed!');
          // this.currentVideo = selectedVideo;
          // $scope.ctrl.selectVideo(selectedVideo);
          // this.selectVideo(selectedVideo);
        });
        this.selectVideo = (selectedVideo) => {
          this.currentVideo = selectedVideo;
        }; //called when click
        this.searchResults = () => {};
        this.currentVideo = window.exampleVideoData[0];
        this.videos = window.exampleVideoData; console.log('videoData',this.videos)
      },
      templateUrl: 'src/templates/app.html'
    }
});

