//http://placehold.it/250/44B3FC/&text=2
angular.module('infiniteGalleryChallenge', [])
.directive('infiniteScroll', function() {
    return{
    	restrict:'EA',
    	controller:'scrolling',
    	link: function(scope, elm, attr) {
        var raw = elm[0];
        elm.bind('scroll', function() {
            if (raw.scrollTop + raw.offsetHeight >= raw.scrollHeight) {
            	
                scope.$apply(attr.scrollfunction);
            }
        });
    	}
    } 	
    
})
.controller('scrolling', ['$scope', function($scope){
		$scope.images = [1, 2, 3, 4, 5, 6, 7, 8];			
  			$scope.loadMore = function() { 				
    			var last = $scope.images[$scope.images.length - 1];
    			for(var i = 1; i <= 4; i++) {
      			$scope.images.push(last + i);
				}		
	}
}]);