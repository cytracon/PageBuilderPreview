define([
	'angular'
], function(angular) {

	var directive = function(cytraconBuilderUrl, $timeout) {
		return {
			replace: true,
			templateUrl: function(elem) {
				return cytraconBuilderUrl.getTemplateUrl(elem, 'Cytracon_PageBuilderPreview/js/templates/builder/navbar/preview.html')
			},
			controller: function($rootScope, $scope, cytraconBuilderUrl, cytraconBuilderService, profileManager) {
				$scope.loaded  = false;
				$scope.tabs    = {};
				$scope.layouts = $rootScope.builderConfig.pageLayouts;

				$scope.getUrl = function(pageLayout) {
					return cytraconBuilderUrl.getFrontendUrl('mgzpagebuilder/preview', {
						key: cytraconBuilderService.getUniqueId(),
						id: $rootScope.builderId,
						page_layout: pageLayout
					});
				}

				$scope.openPreview = function(pageLayout) {
					if (!$scope.loading) {
						var tab = window.open($scope.getUrl(pageLayout), $rootScope.profile.pid + '-' + pageLayout);
						$scope.tabs[pageLayout] = tab;
					}
				}

				$scope.onMouseEnter = function() {
					if (!$scope.loaded) {
						cytraconBuilderService.post('mgzpagebuilder/preview/save', {
							builderId: $rootScope.builderId,
							pid: $rootScope.profile.pid,
							profile: profileManager.toString()
						}, true);
						$scope.loaded = true;
					}
				}

				$scope.loadPreview = function() {
					if (!cytraconBuilderService.isEmpty($scope.tabs)) {
						$scope.loading = true;
						cytraconBuilderService.post('mgzpagebuilder/preview/save', {
							builderId: $rootScope.builderId,
							pid: $rootScope.profile.pid,
							profile: profileManager.toString()
						}, true, function(res) {
							$timeout(function() {
								$scope.loading = false;
								angular.forEach($scope.tabs, function(tab, key) {
									try {
										tab.location.href = $scope.getUrl(key);
									} catch (e) {

									}
								});
							});
						});
					}
				}

				$scope.$on('loadPreview', function() {
					$scope.loadPreview();
				});

				$rootScope.$on('addHistory', function(e, data) {
					$scope.loadPreview();
				});
			}
		}
	}

	return directive;
});