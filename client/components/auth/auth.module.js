'use strict';

angular.module('csatApp.auth', [
  'csatApp.constants',
  'csatApp.util',
  'ngCookies',
  'ui.router'
])
  .config(function($httpProvider) {
    $httpProvider.interceptors.push('authInterceptor');
  });
