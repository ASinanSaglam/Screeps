var creepFuncs = require('meta.creepFuncs');
var roomAnalyzer = require('analyzers.room');

var roomFuncs = {
    run: function(room) {
        roomAnalysis = roomAnalyzer(room);
        
        creepFuncs.spawnCreeps(roomAnalysis);
        creepFuncs.runRoom(roomAnalysis);
    }
}

module.exports = roomFuncs;