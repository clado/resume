angular.module('personalWebsite', [])
	.directive('timeline', function() {
	  return {
      restrict: 'A',
      replace: true,
      scope: { },
      //templateUrl: 'templates/timeline.html',
      template: '<svg class="timeline" preserveAspectRatio="none" viewBox="0 0 {{timespan}} 100"><line x1="0" y1="50" x2="{{timespan}}" y2="50" stroke="grey" stroke-width="2" opacity="1"/><a timeline-experience ng-repeat="item in items" experience="item"></a></svg>',
      link: function(scope, element, attrs) {
        console.log('stuff')

      	var maxDate = new Date()
      	var minDate = _.chain(resumeData)
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
            if (item.dates.end == 'TODAY') item.dates.end = maxDate
            item.dates.start = new Date(item.dates.start)
        		return item
        	})
        })
    		.flatten().value()

        scope.timespan = maxDate - minDate

        console.log(scope.items)

        console.log(maxDate - minDate)

      }
    }

  })
  .directive('timelineExperience', function() {
    return {
      restrict: 'A',
      scope: {
        experience: '='
      },
      //templateUrl: 'templates/experience.html',
      template: '<rect ng-if="experience.dates.end" x="97" y="50" width="{{xpWidth}}" height="5" fill="{{color}}" opacity=".7" /> ',
      link: function(scope, element, attrs) {
        // console.log(scope.experience)
        if (scope.experience.dates.end) scope.xpWidth = scope.experience.dates.end - scope.experience.dates.start
        scope.color = colorData[scope.experience.section].color
        console.log(scope.color)

      }
    }
  })

