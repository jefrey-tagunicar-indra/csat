'use strict';

angular.module('csatApp')
  .config(function ($stateProvider) {
    $stateProvider
      .state('article', {
        url: '/article',
        template: '<article></article>'
      });
  });
