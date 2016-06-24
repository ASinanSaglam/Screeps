var memFuncs = require('meta.memFuncs')
var statFuncs = require('meta.statFuncs');
var roomFuncs = require('meta.roomFuncs');

module.exports.loop = function () {
    // First clean the memory if anything is dead
    memFuncs.cleanUp();
    
    statFuncs.getCreepStats();
    /* I decided to try out a room-by-room strategy
    and eventually tie it all in later */ 
    for(var curRoom in Game.rooms) {
        console.log(curRoom)
        roomFuncs.run(Game.rooms[curRoom]);
    }
}