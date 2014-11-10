function isEmpty(value) {
  return angular.isUndefined(value) || value === '' || value === null || value !== value;
}

function isEmptyNumber(value){
	return angular.isUndefined(value) || value === null || value !== value;
}

function containsNumbersOnly(value){
	return /^[0-9]+$/.test(value);
}
angular.module('validationChallenge', [])
.directive('sameCheckjq', function(){
	return {
		 require: 'ngModel',
			link: function($scope, iElm, iAttrs, controller) {
				var firstPassword = '#' + iAttrs.sameCheck;
				iElm.add(firstPassword).on('keyup', function () {
				$scope.$apply(function () {
					var v = iElm.val()===$(firstPassword).val();
					controller.$setValidity('fieldmatch', v);
				});
			});
		}
	};
}).directive('sameCheck', function(){
	return {
		 require: 'ngModel',
			link: function($scope, iElm, iAttrs, controller) {
			var self=iAttrs.ngModel;
			var other=iAttrs.sameCheck;

			$scope.$watch(other, function(value){
				controller.$setValidity('fieldmatch', $scope[self]===$scope[other]);
			});
			$scope.$watch(self, function(value){
				controller.$setValidity('fieldmatch', $scope[self]===$scope[other]);
			});
		}
	};
}).directive('ngMin', function() {
    return {
        restrict: 'A',
        require: 'ngModel',
        link: function(scope, elem, attr, ctrl) {
            scope.$watch(attr.ngMin, function(){
                ctrl.$setViewValue(ctrl.$viewValue);
            });
            var minValidator = function(value) {
              var min = scope.$eval(attr.ngMin) || 0;
              if (!isEmpty(value) && value < min) {
                ctrl.$setValidity('ngMin', false);
                return undefined;
              } else {
                ctrl.$setValidity('ngMin', true);
                return value;
              }
            };

            ctrl.$parsers.push(minValidator);
            ctrl.$formatters.push(minValidator);
        }
    };
}).directive('ngMax', function() {
    return {
        restrict: 'A',
        require: 'ngModel',
        link: function(scope, elem, attr, ctrl) {
            scope.$watch(attr.ngMax, function(){
                ctrl.$setViewValue(ctrl.$viewValue);
            });
            var maxValidator = function(value) {
              var max = scope.$eval(attr.ngMax) || Infinity;
              if (!isEmpty(value) && value > max) {
                ctrl.$setValidity('ngMax', false);
                return undefined;
              } else {
                ctrl.$setValidity('ngMax', true);
                return value;
              }
            };

            ctrl.$parsers.push(maxValidator);
            ctrl.$formatters.push(maxValidator);
        }
    };
}).directive('isNumber', function() {
    return {
        restrict: 'A',
        require: 'ngModel',
        link: function(scope, elem, attr, ctrl) {
            scope.$watch(attr.isNumber, function(){
                ctrl.$setViewValue(ctrl.$viewValue);
            });

            var numValidator = function(value) {
            	//console.log(containsNumbersOnly(value)+" "+isEmpty(value));
              var check=containsNumbersOnly(value);
            
              
              if (!check&&!isEmptyNumber(value)) {

                ctrl.$setValidity('notNumber', false);
                return undefined;
              } else {
                ctrl.$setValidity('notNumber', true);
                return value;
              }
            };

            ctrl.$parsers.push(numValidator);
            ctrl.$formatters.push(numValidator);
        }
    };
}).directive('errorMessage', function($compile) {
    return {
        restrict: 'A',
         link: function(scope, element, attrs) {
            element[0].innerHTML = attrs.errorMessage;
            attrs.$set('ngShow', attrs.requiredFor + ".$error."+attrs.dirType);
            $compile(element[0])(scope);
        }
    }
});
