
function ProjectsCtrl($scope, $window, $rootElement, $http, $filter) {
  var now = new Date();
  var nowMinusSixMonth = new Date(now.setMonth($scope.dt.getMonth() - 6)).toISOString().slice(0, 10);
  $http({method: 'GET', url: 'https://hackerspace.be/Special:Ask/-5B-5BCategory:Project-5D-5D-20-5B-5Barchived::false-5D-5D-20-5B-5BModification-20-date::>'+nowMinusSixMonths+'-5D-5D/-3FImage-23-2D/-3FDescription-23-2D/-3FStart-20date-23-2D/-3FPeople-23-2D/-3FArchived-23-2D/format%3Djson/prettyprint%3Dtrue/offset%3D0'}).
            success(function(data, status, headers, config) {
                console.log(data.results);
                $scope.projects = data.results;
            });

}
