'use strict';

/* jasmine specs for directives go here */

describe('directives', function() {
  var $compile;
  var $rootScope;
  
  beforeEach(module('icixUICCApp'));
  beforeEach(module('icixUICCApp.directives'));
  
  beforeEach(inject(function(_$compile_, _$rootScope_){
    // The injector unwraps the underscores (_) from around the parameter names when matching
    $compile = _$compile_;
    $rootScope = _$rootScope_;
  }));
  
  describe('resize-map', function() {
    
    it('should resize the map height based on the height of the data table', function() {
    
    });
  });
  
  describe('transpose-table', function() {
  
    it('should preserve selection in the table when it is transposed', function() {
    
    });
  });
  
});
