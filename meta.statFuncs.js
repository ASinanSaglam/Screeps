var roleDict = require('meta.roleDict');

var statFuncs = {
    // Creep related stat functions
    getCreepStats: function () {
        var creepStats = {}
        for(var roleName in roleDict) {
            var roleCreeps = _.filter(Game.creeps, (creep) => creep.memory.role == roleName);
            console.log(roleName + ": " + roleCreeps.length);
            creepStats[roleName] = roleCreeps.length;
            
            return creepStats;
        }
    },
    // Room related stat functions
    
    getRoomStats: function(room) {
        var enerAvail = room.energyAvailable;
        var enerCap = room.energyCapacityAvailable;
        var sources = room.find(FIND_SOURCES);
        
        var roomStats = [enerAvail, enerCap, sources];
        
        return roomStats;
    },
    
    printRoomStats: function(roomStats) {
        
        var enerAvail = roomStats[0];
        var enerCap = roomStats[1];
        var sources = roomStats[2];
        
        console.log('Energy available: ' + enerAvail);
        console.log('Energy capacity: ' + enerCap);
        console.log('Total number of resources: ' + sources.length);
    }
    
    /*
    After this we'll need to generate an 'empire' stats, summarizing the situation
    with the entire set of rooms we control
    */
};
module.exports = statFuncs;