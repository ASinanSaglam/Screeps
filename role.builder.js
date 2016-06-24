var spawnFuncs = require('meta.spawnFuncs');

var roleBuilder = {

    /** @param {Creep} creep **/
    run: function(creep) {
        
        var targets = creep.room.find(FIND_CONSTRUCTION_SITES);

	    if(creep.memory.building && creep.carry.energy == 0) {
            creep.memory.building = false;
	    }
	    if(!creep.memory.building && creep.carry.energy == creep.carryCapacity) {
	        if (targets.length) {
	            creep.memory.building = true;    
	        }
	    }

	    if(creep.memory.building) {
            if(targets.length) {
                if(creep.build(targets[0]) == ERR_NOT_IN_RANGE) {
                    creep.moveTo(targets[0]);
                } 
            } else {
                creep.memory.building = false;
            }
	    }
	    else {
	        var sources = creep.room.find(FIND_SOURCES);
	        if(creep.carry.energy < creep.carryCapacity) {
                if(creep.harvest(sources[0]) == ERR_NOT_IN_RANGE) {
                    creep.moveTo(sources[0]);
                }
	        } else {
                var spawn = spawnFuncs.selectClosest();
	            creep.moveTo(spawn);
            }
	    }
	}
};

module.exports = roleBuilder;