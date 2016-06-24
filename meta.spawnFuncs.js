var spawnFuncs = {
    selectClosest: function() {
        var spawn;
        for(var sp in Game.spawns) {
            spawn = Game.spawns[sp];
        }
        return spawn;    
    }
};
module.exports = spawnFuncs;