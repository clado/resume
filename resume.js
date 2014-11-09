angular.module('personalWebsite', [])
	.directive('timeline', function() {
	return {
      restrict: 'A',
      replace: true,
      scope: {
        
      },
      //templateUrl: 'templates/timeline.html',
      template: '<svg width="100%" height="50%" viewBox="0 0 200 200"><line x1="10" y1="50" x2="190" y2="50" stroke="grey" stroke-width="1"/></svg>',
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
      	.min()

      	console.log(maxDate, minDate)

      	items = _.chain(resumeData)
      	.map(function(object, key) {
  			var section = key
      		return _.map(object, function(date, title) {
      			var name = title
      			return date.dates
      		})
      	})
		.flatten()

      }
    }

})

