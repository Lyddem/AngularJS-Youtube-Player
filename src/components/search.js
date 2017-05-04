angular.module('video-player')

.directive('search', function() {
  return {
    scope: {
    },
    restrict: 'E',
    controllerAs: 'ctrl',
    bindToController: true,
    controller: function () {
    	//ex. this.name = 'lydia'
    	//can reference {{ctrl.name in search.html}}
      this.result = () => {};      
    },

    templateUrl: 'src/templates/search.html'
  };
});
