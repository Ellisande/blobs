var blobs = angular.module('blobs');

blobs.directive('tile', function() {
  return {
    templateUrl: 'tile/tile.html',
    controller: 'TileCntrl'
  }
});
