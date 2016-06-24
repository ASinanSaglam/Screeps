var memFuncs = require('meta.memFuncs')
var roomFuncs = require('meta.roomFuncs');
var creepFuncs = require('meta.creepFuncs');

module.exports.loop = function () {
    // First clean the memory if anything is dead
    memFuncs.cleanUp();
    
    /* I decided to try out a room-by-room strategy
    and eventually tie it all in later.
    I will eventually write an 'empire' analysis
    tool to add here so I have a general idea as 
    to what my empire is up to. */ 
    for(var curRoom in Game.rooms) {
        console.log(curRoom);
        roomFuncs.run(Game.rooms[curRoom]);
    }
}
