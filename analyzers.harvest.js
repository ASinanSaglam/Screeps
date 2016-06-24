var harvestAnalyzer = {
    /* This class supposed to assess the entire room and then figure out how to make
    efficient use of all sources */
    run: function(room) {
        var roomSources = room.find(FIND_SOURCES);
        var roomCreeps = room.find(FIND_CREEPS);
        var roomHarvesters = _.filter(roomCreeps, (creep) => creep.memory.role == 'harvester;')
        
        
    }
};

module.exports = harvestAnalyzer;