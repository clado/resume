angular.module('personalWebsite', [])
	.directive('timeline', function() {
	  return {
      restrict: 'A',
      replace: true,
      scope: {
        
      },
      //templateUrl: 'templates/timeline.html',
      template: '<svg width="100%" height="50%" viewBox="0 0 200 200"><line x1="10" y1="50" x2="190" y2="50" stroke="grey" stroke-width="1"/><a timeline-item ng-repeat="item in items"></a></svg>',
      link: function(scope, element, attrs) {

      	maxDate = new Date()
      	minDate = _.chain(resumeData)
      	.map(function(object){
      		return _.map(object, function(date) {
      			return date.dates
      		})
      	})
      	.flatten()
      	.map(function(date){
      		if (date) return new Date (date.start)
      	})
      	.min().value()

      	console.log('max', maxDate)
            console.log('min', minDate)

      	scope.items = _.chain(resumeData)
      	.map(function(object, key) {
    			var section = key
        	return _.map(object, function(item) {
            item.section = section
        		return item
        	})
        })
    		.flatten().value()

        console.log(scope.items)

      }
    }
    .directive('')

})

