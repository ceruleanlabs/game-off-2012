/**
* Box
* Adds a listener to the push trigger.  
*/
Crafty.c('Box', {
  init: function() {
    this.requires("solid, Moveable");
  },
  
  getNeighbors: function(type) {
    var neighbors = [];
    var directions = [[1,0], [0,1], [-1,0], [0,-1]]
    var collisionDetector = null;
    
    for (var i = 0; i < directions.length; i++) {
      collisionDetector = Crafty.e("2D, Collision").attr({ x: (this.x+directions[i][0]*gameBoard.tileSize), y: this.y+directions[i][1]*gameBoard.tileSize, w: 1, h: 1 });
      entitiesHit = collisionDetector.hit(type);
      if (entitiesHit.length > 0)
        neighbors.push(entitiesHit[0].obj);
    }
    
    return neighbors;
  },

  PushableBox: function() {
      return this;
  }
});

/**
* Pushable Box
* Adds a listener to the push trigger.  
*/
Crafty.c('PushableBox', {
    init: function() {
        this.requires("pushable, Box")
    },
    
    push: function(direction) {
        return this.EntityMove(direction);
    },
    
    PushableBox: function() {
        return this;
    }
});

/**
* Removable Box
* This is a box that can remove itself and its neighbors of the same color
* Requires ColorBox as it depends on the colors to determine what to remove
*/
Crafty.c('RemovableBox', {
    init: function() {
        this.requires("removable, Box, ColorBox")
        .bind('remove', function() {
            this.removeNeighbors();
        });
    },

    // Removes the itself and its neighbors if TWO or more are touching
    // TODO: The number of blocks touching should be configurable, probably as
    // an input ot the constructor
    removeNeighbors:function() {
        var neighborsToCheck = [];    // Stack of neighbors to check
        var removableNeighbors = {};  // Blocks that are confirmed for removal
        // First add itself to the confirmed blocks for removal
        removableNeighbors[this.x + "," + this.y] = this;
        // Then add the immediate neighbors to the ones to check
        neighborsToCheck = neighborsToCheck.concat(this.getNeighbors('removable'));
        
        // While there are still blocks to check, check to see if we already checked it.
        // If not, add the neighbor of that block to the list to check
        while(neighborsToCheck.length > 0) {
            var neighbor = neighborsToCheck.pop();
            // Skip it if we've already checked it, if its not a color, or its not the same color
            if(removableNeighbors[neighbor.x + "," + neighbor.y] 
                || !neighbor.has("ColorBox") 
                || neighbor.colorComponentString() != this.colorComponentString())
                continue;
            else {
                removableNeighbors[neighbor.x + "," + neighbor.y] = neighbor;
                neighborsToCheck = neighborsToCheck.concat(neighbor.getNeighbors('removable'));
            }
        }

        // If the number of removable blocks is >= 2 then remove them
        if(_.size(removableNeighbors) > 1) {
            _.each(removableNeighbors, function(neighborToDestroy, key){ 
                neighborToDestroy.destroy();
            });
        }
    },
  
    RemovableBox: function() {
        return this;
    }
});

/**
* Box
* Applies a sprite for the colored boxes
*/
Crafty.c('ColorBox', {
    _colorString: "whiteBox", // Default is white

    init: function() {
        this.requires("Box, " + this._colorString);
    },

    // Constructer takes a string that represents a color and applies the sprite
    // Choices so far are "white", "red", "blue", "purple"
    ColorBox: function(color) {
        this.removeComponent(this._colorString, false);
        this._colorString = color + "Box";
        this.addComponent(this._colorString);
        return this;
    },

    colorComponentString: function() {
        return this._colorString;
    }
});
