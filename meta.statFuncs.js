var roleDict = require('meta.roleDict');

var statFuncs = {
    printRoomAnalysis: function (analysis) {

    console.log("Room analysis results");
    console.log("Energy available: " + analysis.enerAvail);
    console.log("Energy capacity: " + analysis.enerCap);
    console.log("My spawns: " + analysis.spawns.length);
    console.log("My creeps: " + analysis.creeps.length);
    console.log("My sources: " + analysis.sources.length);
    },
};
module.exports = statFuncs;
