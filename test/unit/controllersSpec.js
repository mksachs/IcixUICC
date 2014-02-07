'use strict';

/* jasmine specs for controllers go here */
describe('controllers', function() {
  
  beforeEach(module('icixUICCApp'));
  beforeEach(module('icixUICCApp.controllers'));

  describe('ListCtrl', function(){
    var scope, ctrl, $httpBackend, $compile;

    beforeEach(inject(function(_$compile_, _$httpBackend_, $rootScope, $controller) {
      // The injector unwraps the underscores (_) from around the parameter names when matching
      $httpBackend = _$httpBackend_;
      $httpBackend.expectGET('data/data.json').
          respond({headers:{FirstName:'First Name'},records:[{FirstName: 'Usher'}, {FirstName: 'Barak'}]});
      
      $compile = _$compile_;
      scope = $rootScope.$new();
      ctrl = $controller('ListCtrl', {$scope: scope});
    }));


    it('should create "people" model with 2 people and a header fetched from xhr', function() {
      $httpBackend.flush();
      
      expect(scope.data).toEqual([{FirstName: 'First Name'},
                                  {FirstName: 'Usher'},
                                  {FirstName: 'Barak'}]);
    });
    
    it('should set "is_transposed" when the transpose method is called', function() {
      expect(scope.is_transposed).toEqual(false);
      scope.transpose();
      expect(scope.is_transposed).toEqual(true);
    });
    
    it('should get a Google map', function() {
      
    });
    
    it('should initially set "is_transposed" to false', function() {
    
    });
    
  });
});
