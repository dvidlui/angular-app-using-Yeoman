'use strict';

/**
 * @ngdoc function
 * @name todoApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the todoApp
 */
angular.module('todoApp')
  .controller('AboutCtrl', function ($scope, localStorageService) {
    var todosInStore = localStorageService.get('todos');

		$scope.todos = todosInStore || [];

		$scope.$watch('todos', function () {
		  localStorageService.set('todos', $scope.todos);
		}, true);
  });
