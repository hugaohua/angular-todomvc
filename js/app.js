(function (angular) {
	'use strict';

	// Your starting point. Enjoy the ride!
	var app = angular.module('todoApp',[]);
	app.controller('todoApp_controller',['$scope',function ($scope) {
		//数据
		$scope.takes = [
			{id:1,name:'吃饭',complate:true},
			{id:2,name:'睡觉',complate:true},
			{id:3,name:'打豆豆',complate:false},
			{id:4,name:'学习',complate:false},
			{id:5,name:'看书',complate:true},
			{id:6,name:'shit',complate:true}
		];
		// 增加
		$scope.newTakes = '';
		$scope.add = function () {

			if($scope.newTakes==''){
				return;
			}
			var id ;
			if($scope.takes.length==0){
				id = 1;
			}else{
				id = $scope.takes[$scope.takes.length-1].id+1;
			}
			$scope.takes.push({id:id,name:$scope.newTakes,complate:false});
			$scope.newTakes = '';
		};
		//删除
		$scope.destroy= function (id) {
			var m = $scope.takes
			for (var i = 0; i 	<m.length; i++) {
				if(m[i].id ==id ){
					$scope.takes.splice(i,1);
					return;
				}

			}
		}
		// 修改
		$scope.isEiting = -1;
		$scope.editing = function (id) {
			$scope.isEiting = id;
		}
		//保存
		$scope.save= function () {
			$scope.isEiting=-1;
		}
		//批量切换
		var flag = true	;
		$scope.toggleAll = function () {
			for (var i = 0; i < $scope.takes.length; i++) {
				$scope.takes[i].complate = flag;
			}
			flag = !flag;
		}
		// 批量删除
		$scope.clearCompleted = function () {
			var temp = [];
			for (var i = 0; i < $scope.takes.length; i++) {
				var item = $scope.takes[i];
				if(!item.complate){
					temp.push(item);
				}
			}
			$scope.takes = temp;
		}
		//显示隐藏按钮
		$scope.isShow = function () {
			for (var i = 0; i < $scope.takes.length; i++) {
				var item = $scope.takes[i];
				if(item.complate==true){
					return true;
				}
			}
			return false;

		}
		// 动态显示left
		$scope.leftNumber = 0;
		$scope.$watch('takes',function (newVal,oldVal) {
			$scope.leftNumber = 0;
			for (var i = 0; i < newVal.length; i++) {
				var item = newVal[i];
				if(!item.complate){
					$scope.leftNumber++;
				}

			}
		},true)
		// 显示未完成的任务
		$scope.isComplate = {};
		$scope.active = function () {
			$scope.isComplate = {complate:false};
		}
		// 显示已完成的任务
		$scope.complate = function () {
			$scope.isComplate = {complate:true};
		}
		// 显示全部
		$scope.all = function () {
			$scope.isComplate = {};
		}

	}]);

})(angular);
