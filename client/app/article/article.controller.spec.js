'use strict';

describe('Component: ArticleComponent', function () {

  // load the controller's module
  beforeEach(module('csatApp'));

  var ArticleComponent, scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($componentController, $rootScope) {
    scope = $rootScope.$new();
    ArticleComponent = $componentController('ArticleComponent', {
      $scope: scope
    });
  }));

  it('should ...', function () {
    expect(1).toEqual(1);
  });
});
