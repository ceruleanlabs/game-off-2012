/**
* This creates a scene for the game board.  The game board will read files that describe levels and build them.
*
* Author: Fork It, We'll do it live!
*/

Crafty.scene("9001", function () {
  levelManager.loadMap(9001, function(){
    console.log('map 9001 loaded');
  });
});

Crafty.scene("0", function () {
  levelManager.loadMap(0, function(){
    console.log('map 0 loaded');
  });
});

Crafty.scene("1", function () {
  levelManager.loadMap(1, function(){
    console.log('map 1 loaded');
  });
});

Crafty.scene("2", function () {
  levelManager.loadMap(2, function(){
    console.log('map 2 loaded');
  });
});

Crafty.scene("3", function () {
  levelManager.loadMap(3, function(){
    console.log('map 3 loaded');
  });
});

Crafty.scene("4", function () {
  levelManager.loadMap(4, function(){
    console.log('map 4 loaded');
  });
});

Crafty.scene("100", function () {
  levelManager.loadMap(100, function(){
    console.log('map 100 loaded');
  });
});