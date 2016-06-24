var creepFuncs = require('meta.creepFuncs');
var roomAnalyzer = require('analyzers.room');
var statFuncs = require('meta.statFuncs')

var roomFuncs = {
    run: function(room) {
        /* the generic idea here is to 
           1) analyze the room 
           2) use the analysis to decide what do to with the room. 
              for now I'll stick to a simple set of ideas, will be
              thinking about more later (complicated building stuff 
              for example.
              a) do we generate more units (no upgrading yet)
              b) where do we assign our units
              c) upgrading considerations (nothing fancy here yet)
              d) building considerations (nothing fancy here yet)
        */ 
        var roomAnalysis = roomAnalyzer.run(room);

        // Now we have some data to work with, basic but it's a start
        // let's use that data to inform our decisions directly
        roomAnalysis = creepFuncs.spawnCreeps(roomAnalysis);
        //roomAnalysis = creepFuncs.assignCreeps(roomAnalysis);

        // Print the analysis
        statFuncs.printRoomAnalysis(roomAnalysis);
    }
}

module.exports = roomFuncs;
