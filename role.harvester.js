//var spawnFuncs = require('meta.spawnFuncs');

var roleHarvester = {

    /** @param {Creep} creep **/
    run: function(creep) {
        // First check to see if we have room for more energy
	    if(creep.carry.energy < creep.carryCapacity) {
            var sources = creep.room.find(FIND_SOURCES);
            if(creep.harvest(sources[0]) == ERR_NOT_IN_RANGE) {
                // Probably should add enemy checking here at some point
                creep.moveTo(sources[0]);
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
                // Go and fill up the target 
                if(creep.transfer(targets[0], RESOURCE_ENERGY) == ERR_NOT_IN_RANGE) {
                    creep.moveTo(targets[0]);
                }
            } else {
                var spawn = spawnFuncs.selectClosest();
                creep.moveTo(spawn);
            };
        }
	}
};

module.exports = roleHarvester;