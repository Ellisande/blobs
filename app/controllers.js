var blobs = angular.module('blobs', []);

blobs.controller('BlobCntrl', function($scope) {
  $scope.player1 = {};
  $scope.player1.tiles = [{
    id: 1,
    color: 'red',
    top: 4,
    right: 4,
    bottom: 4,
    left: 4
  }];
});

blobs.controller('TileCntrl', function($scope){
  $scope.getTicks = function(ticks){
    console.log(ticks);
    return new Array(ticks);
  }
})
