var roleHarvester = require('role.harvester');
var roleUpgrader = require('role.upgrader');
var roleBuilder = require('role.builder');

module.exports.loop = function () {

    var harvesters = _.filter(Game.creeps, (creep) => creep.memory.role == 'harvester');
    var builders = _.filter(Game.creeps, (creep) => creep.memory.role == 'builder');
    var upgraders = _.filter(Game.creeps, (creep) => creep.memory.role == 'upgrader');

    if(harvesters.length < 4)
    Game.spawns['Spawn1'].spawnCreep([WORK,WORK,WORK,CARRY,CARRY,MOVE,MOVE],'harvester'+Math.floor(Math.random() * 10000),{memory:{role:'harvester'}})
    else if(upgraders.length < 4)
    Game.spawns['Spawn1'].spawnCreep([WORK,WORK,WORK,WORK,CARRY,MOVE],'upgrader'+Math.floor(Math.random() * 10000),{memory:{role:'upgrader'}})
    else if(Game.spawns['Spawn1'].pos.findClosestByRange(FIND_CONSTRUCTION_SITES) != null && builders.length < 2)
    Game.spawns['Spawn1'].spawnCreep([WORK,WORK,CARRY,CARRY,CARRY,MOVE],'builder'+Math.floor(Math.random() * 10000),{memory:{role:'builder'}})

    if(Game.spawns['Spawn1'].store.getFreeCapacity() == 0)
    {
        for(var creep in harvesters)
        {
            creep.memory.tempRole = 'upgrader';
        }
    }
    else
    {
        for(var creep in harvesters)
        {
            creep.memory.tempRole = '';
        }
    }

    for(var name in Game.creeps) {
        var creep = Game.creeps[name];
        if(creep.memory.role == 'upgrader' || creep.memory.tempRole == 'upgrader') {
            roleUpgrader.run(creep);
        }
        if(creep.memory.role == 'harvester') {
            roleHarvester.run(creep);
        }
        if(creep.memory.role == 'builder') {
            roleBuilder.run(creep);
        }
    }

    if(Game.cpu.bucket==10000)
        Game.cpu.generatePixel();

}