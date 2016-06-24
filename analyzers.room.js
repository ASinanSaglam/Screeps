var harvestAnalyzer = require('analyzers.harvest');
var upgradeAnalyzer = require('analyzers.upgrade');
var buildAnalyzer = require('analyzers.build');

var roomAnalyzer = {
    analysis: {
        "harvesting":,
        "upgrading":,
        "building":
    },
    
    run: function(room) {
        this.analysis['harvesting'] = harvestAnalyzer.run(room);
        this.analysis['upgrading'] = upgradeAnalyzer.run(room);
        this.analysis['building'] = buildAnalyzer.run(room);
        
        return analysis;
    }
};

module.exports = roomAnalyzer;