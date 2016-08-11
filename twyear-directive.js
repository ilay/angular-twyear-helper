app.directive('twyear', function ($filter) {
    return {
        require: 'ngModel',
        link: function(elem, $scope, attrs, ngModel){
            ngModel.$formatters.push(function(val){
	            var time = val*1000; // seconds to milliseconds
                var year = $filter('date')(time, "yyyy")-1911;
                var month = $filter('date')(time, "MM");
                var day = $filter('date')(time, "dd");
                var hour = $filter('date')(time, "hh");
                var minute = $filter('date')(time, "mm");
                var marker = $filter('date')(time, "a");

                var output = year+'-'+month+'-'+day+' '+hour+':'+minute+' '+marker;

                return output;
            });
        }
    }
})
