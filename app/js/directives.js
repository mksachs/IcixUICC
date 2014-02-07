'use strict';

/* Directives */

angular.module('icixUICCApp.directives', []).
  directive('resizeMap', ['$timeout', function ($timeout) {
    return {
      link: function ($scope, elem, attrs) {
        $scope.$on('dotabletranspose', function() {
          $timeout(function() {
            var table_height = jQuery("table").height();
            var window_height = jQuery(window).height();
            jQuery("#map").height(window_height-table_height);
          }, 0, false);
        });
      }
    };
  }]).
  directive('transposeTable', ['$timeout', function ($timeout) {
    return {
      link: function ($scope, elem, attrs) {
        $scope.$on('dotabletranspose', function() {
          $timeout(function() {
            if ( $scope.selected ) {
              jQuery(".entry").removeClass("selected");
              jQuery(".no"+$scope.selected).addClass("selected");
            }
          }, 0, false);
        });
      }
    };
  }]);