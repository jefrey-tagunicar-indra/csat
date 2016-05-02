'use strict';

angular.module('csatApp')
.factory("Article", function($resource) {
  return $resource("/api/articles/:id", { id: "@_id" },
    {
      'create':  { method: 'POST' },
      'list':    { method: 'GET', isArray: true },
      'show':    { method: 'GET', isArray: false },
      'update':  { method: 'PUT' },
      'destroy': { method: 'DELETE' }
    }
  );
});