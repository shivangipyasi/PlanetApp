var myApp= angular.module('myApp',['ngRoute']);
myApp.controller('myCtrl',function($scope,$http,$routeParams){
  $http.get('planets.json')
  .success(function(resp){
  	$scope.stars=resp;
   
  });
    $scope.name =$routeParams.name;
  });


var newApp = angular.module('newApp');

newApp.factory('Myfactory',function() {



var serviceObj = {};
serviceObj.function1 = function()
{


};

serviceObj.function2 = function()
{


};

return serviceObj;

});


  myApp.config(function($routeProvider){
   $routeProvider.when('/',{
      templateUrl:'templates/table.html',
      controller: 'myCtrl'
   }).when('/:name',{
      templateUrl:'templates/main.html',
      controller: 'myCtrl'
   })

});
