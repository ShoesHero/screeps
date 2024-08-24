var roleHarvester = require('role.harvester');
var roleUpgrader = require('role.upgrader');
var roleBuilder = require('role.builder');

module.exports.loop = function () {

    var harvesters = _.filter(Game.creeps, (creep) => creep.memory.role == 'harvester');
    var builders = _.filter(Game.creeps, (creep) => creep.memory.role == 'builder');
    var upgraders = _.filter(Game.creeps, (creep) => creep.memory.role == 'upgrader');

    if(harvesters.length < 2)
    Game.spawns['Spawn1'].spawnCreep([WORK,WORK,CARRY,MOVE],'harvester'+Math.floor(Math.random() * 10000),{memory:{role:'harvester'}})
    if(upgraders.length < 4)
    Game.spawns['Spawn1'].spawnCreep([WORK,WORK,CARRY,MOVE],'upgrader'+Math.floor(Math.random() * 10000),{memory:{role:'upgrader'}})
    if(builders.length<2)
    Game.spawns['Spawn1'].spawnCreep([WORK,CARRY,CARRY,MOVE],'upgrader'+Math.floor(Math.random() * 10000),{memory:{role:'builder'}})


    for(var name in Game.creeps) {
        var creep = Game.creeps[name];
        if(creep.memory.role == 'harvester') {
            roleHarvester.run(creep);
        }
        if(creep.memory.role == 'upgrader') {
            roleUpgrader.run(creep);
        }
        if(creep.memory.role == 'builder') {
            roleBuilder.run(creep);
        }
    }

}