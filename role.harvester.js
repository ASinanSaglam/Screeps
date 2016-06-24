var distFuncs = require('meta.distFuncs');

var roleHarvester = {
    /** @param {Creep} creep **/
    run: function(creep) {
       // First check to see if we have room for more energy
	    if(creep.carry.energy < creep.carryCapacity) {
        var source = creep.memory.assigned
        if(creep.harvest(source) == ERR_NOT_IN_RANGE) {
          // Probably should add enemy checking here at some point
          creep.moveTo(source);
        }
      }
      else {
        // Be useful if we are full up on energy
        var targets = creep.room.find(FIND_STRUCTURES, {
          // Find where we can put the energy we have
          filter: (structure) => {
            return (structure.structureType == STRUCTURE_EXTENSION || structure.structureType == STRUCTURE_SPAWN) &&
                    structure.energy < structure.energyCapacity;
          }
        });
        if(targets.length > 0) {
          var closestTarget = distFuncs.findClosest(creep.pos, targets);
          console.log(closestTarget);
          // Go and fill up the target 
          if(creep.transfer(closestTarget, RESOURCE_ENERGY) == ERR_NOT_IN_RANGE) {
             creep.moveTo(closestTarget);
          }
        } else {
                var closestSpawn = distFuncs.findClosest(creep.pos, creep.room.find(FIND_MY_SPAWNS));
                creep.moveTo(closestSpawn);
        };
      }
	}
};

module.exports = roleHarvester;
