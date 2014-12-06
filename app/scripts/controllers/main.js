'use strict';

/**
 * @ngdoc function
 * @name todoApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the todoApp
 */
angular.module('todoApp')
  .controller('MainCtrl', function ($scope, localStorageService) 
  {  
    var todosInStore = localStorageService.get('todos');

		$scope.todos = todosInStore || [];

		$scope.$watch('todos', function () {
		  localStorageService.set('todos', $scope.todos);
		}, true);
		
		$scope.addTodo = function () {
		  $scope.todos.push($scope.todo);
		  $scope.todo = '';
		};    

		$scope.removeTodo = function (index) {
      $scope.todos.splice(index, 1);
    };

	  // it('should add items to the list', function () {
	  //   scope.todo = 'Test 1';
	  //   scope.addTodo();
	  //   expect(scope.todos.length).toBe(1);
	  // });

	  // it('should add then remove an item from the list', function () {
	  //   scope.todo = 'Test 1';
	  //   scope.addTodo();
	  //   scope.removeTodo(0);
	  //   expect(scope.todos.length).toBe(0);
	  // });
  });
