var roleDict = require('meta.roleDict');
var spawnFuncs = require('meta.spawnFuncs');

var creepFuncs = {
    runAll: function(){
        for(var name in Game.creeps) {
            var creep = Game.creeps[name];
            var roleName = creep.memory.role;
            var roleFunc = roleDict[roleName];
            
            roleFunc.run(creep);
        }
    },
    checkCreeps: function() {
        var harvesters = _.filter(Game.creeps, (creep) => creep.memory.role == 'harvester');
        var builders = _.filter(Game.creeps, (creep) => creep.memory.role == 'builder');
        var upgraders = _.filter(Game.creeps, (creep) => creep.memory.role == 'upgrader');
        var allCreeps = [harvesters, builders, upgraders];
        return allCreeps;
    },
    spawnCreeps: function(allCreeps) {
        var harvesters = allCreeps[0];
        var builders = allCreeps[1];
        var upgraders = allCreeps[2];
        
        var tot = harvesters.length + builders.length + upgraders.length;
        var harvesters_rat = harvesters.length/tot;
        var builders_rat = builders.length/tot;
        var upgraders_rat = upgraders.length/tot;
        
        console.log("Total: " + tot);
        console.log("Ratios: " + harvesters.length);
        console.log("Ratios: " + builders.length);
        console.log("Ratios: " + upgraders.length);
        
        var spawn = spawnFuncs.selectClosest();
        if(harvesters_rat < 5 || harvesters.length < 1) {
            var newName = spawn.createCreep([WORK,CARRY,MOVE], undefined, {role: 'harvester'});
        } else if(upgraders.length < 1 || upgraders_rat < 1) {
            var newName = spawn.createCreep([WORK,CARRY,MOVE], undefined, {role: 'upgrader'});
        } else if(builders.length < 1 || builders_rat < 1) {
            var newName = spawn.createCreep([WORK,CARRY,MOVE], undefined, {role: 'builder'});
        }
        
    }
};

module.exports = creepFuncs;