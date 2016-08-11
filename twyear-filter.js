/* Filters */
// need load the moment.js to use this filter.
angular.module('app')
    .filter('twyear', function($filter) {
        return function(val) {
            var time = val*1000; // seconds to milliseconds
            var year = $filter('date')(time, "yyyy")-1911;
            var month = $filter('date')(time, "MM");
            var day = $filter('date')(time, "dd");
            var hour = $filter('date')(time, "hh");
            var minute = $filter('date')(time, "mm");
            var marker = $filter('date')(time, "a");

            var output = '民國'+year+'年'+month+'月'+day+'日 '+hour+':'+minute+' '+marker;

            return output;
        }
    });
