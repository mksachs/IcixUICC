'use strict';

/* Controllers */

angular.module('icixUICCApp.controllers', []).
  controller('ListCtrl', ['$scope', '$http', function($scope, $http) {
    var headers,
      records,
      combined_data,
      map;
    var is_transposed = false;

    $http.get('data/data.json').success(function(in_data) {
      records = in_data.records;
      headers = [in_data.headers];
      combined_data = headers.concat(records);
      $scope.data = combined_data;
    });
    
    $scope.is_transposed = is_transposed;
    
    $scope.transpose = function() {
      if (is_transposed)
        is_transposed = false;
      else
        is_transposed = true;
      
      $scope.is_transposed = is_transposed;
      
      $scope.$broadcast('dotabletranspose');
    }
    
    $scope.get_map = function(person, index) {
      if (index != 0 ) {
        
        $scope.selected = index;
        jQuery(".entry").removeClass("selected");
        jQuery(".no"+index).addClass("selected");
        var address_string = jQuery.trim(person.StreetNo + ' ' + person.StreetAddress + ', ' + person.State).split(' ').join('+');
        jQuery("#map").width(jQuery("table").width());
        $scope.$broadcast('dotabletranspose');
        
        $http.get('http://maps.googleapis.com/maps/api/geocode/json?address='+address_string+'&sensor=false').success(function(in_data) {
          
          var loc = new google.maps.LatLng(in_data.results[0].geometry.location.lat, in_data.results[0].geometry.location.lng);
          var map_options = {
            center: loc,
            zoom: 12
          };
          
          map_options.center = loc;
          map = new google.maps.Map(jQuery("#map")[0], map_options);
          var marker = new google.maps.Marker({
              position: loc,
              map: map,
              title:jQuery.trim(person.FirstName + ' ' + person.LastName)
          });
          
          jQuery(window).resize(function(){
            jQuery("#map").width(jQuery("table").width());
            $scope.$broadcast('dotabletranspose');
          });
          
        });
      }
    }
  }]);