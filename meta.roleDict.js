var roleHarvester = require('role.harvester');
var roleBuilder = require('role.builder');
var roleUpgrader = require('role.upgrader');

var roleDict = {
    'harvester': roleHarvester,
    'builder': roleBuilder,
    'upgrader': roleUpgrader
}

module.exports = roleDict;