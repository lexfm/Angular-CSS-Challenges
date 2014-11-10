angular.module('spreadSheetChallenge', [])
.directive('spreadSheet', function(){
	// Runs during compile
	return {
		 restrict: 'AE', // E = Element, A = Attribute, C = Class, M = Comment
		 template: '<div><table><tr class="column-label"><td></td><td ng-repeat="column in columns">{{column}}</td></tr><tr ng-repeat="row in rows"><td class="row-label">{{row}}</td><td ng-repeat="column in columns"><div><input ng-model="cells[column+row]"></input><div ng-bind="compute(column+row)"class="output"></div></div></td></tr></table></div>',
		 //templateUrl: 'sheetTemplate.html',
		 replace: true,
		// transclude: true,
		link: function($scope, iElm, iAttrs, controller) {
			$scope.columns = [];
    		$scope.rows = [];
    		for(var i=0;i<iAttrs.columns;i++){
    			$scope.columns[i]=String.fromCharCode(i+65);
    		}
    		for(var i=0;i<iAttrs.rows;i++){
    			$scope.rows[i]=i+1;
    		}
    		$scope.cells = {};
    		//var test=String.fromCharCode(65+2,66,67);
    		console.log(iAttrs);
    		$scope.compute = function(cell) {
    		if($scope.cells[cell]!=undefined){
    		
    		return $scope.cells[cell];
    		}			
		}
	}
}
});