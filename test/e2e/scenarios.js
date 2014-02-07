'use strict';

/* http://docs.angularjs.org/guide/dev_guide.e2e-testing */

describe('IcixUICC app', function() {

  beforeEach(function() {
    browser().navigateTo('../../app/index.html');
  });


  it('should automatically redirect to /list when location hash/fragment is empty', function() {
    expect(browser().location().url()).toBe('/list');
  });


  describe('list', function() {

    beforeEach(function() {
      browser().navigateTo('#/list');
    });

    it('should render list when user navigates to /list', function() {
      
    });
    
    it('should render a list with one row for each item in app/data/data.json', function() {
      
    });
    
    it('should render a list with headers defined in in app/data/data.json', function() {
      
    });
    
    it('should transpose the list when the "Transpose" button is clicked', function() {
      
    });
    
    it('should open a Google map when an item in the table is clicked', function() {
      
    });
    
    it('should highlite the selected item in the table', function() {
      
    });
    
    it('should maintain table selection when the list is transposed', function() {
      
    });
    
    it('should scale the map when the table is transposed', function() {
      
    });
    
    it('should scale the map when the window is resized', function() {
      
    });
    
  });
});
