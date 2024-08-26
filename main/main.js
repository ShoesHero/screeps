var roleHarvester = require('role.harvester');
var roleUpgrader = require('role.upgrader');
var roleUpgrader2 = require('role.upgrader2');
var roleBuilder = require('role.builder');
var roleTransfer = require('role.transfer');

module.exports.loop = function () {

    var tower = Game.getObjectById('66ca030f0aebc4f822885b9f');
    if (tower) {
        var closestDamagedStructure = tower.pos.findClosestByRange(FIND_STRUCTURES, {
            filter: (structure) => structure.hits / structure.hitsMax < 0.5 && (structure.structureType != STRUCTURE_WALL)
        });
        if (closestDamagedStructure) {
            tower.repair(closestDamagedStructure);
        }

        var closestHostile = tower.pos.findClosestByRange(FIND_HOSTILE_CREEPS);
        if (closestHostile) {
            tower.attack(closestHostile);
        }
    }





    var harvesters = _.filter(Game.creeps, (creep) => creep.memory.role == 'harvester');
    var builders = _.filter(Game.creeps, (creep) => creep.memory.role == 'builder');
    var upgraders = _.filter(Game.creeps, (creep) => creep.memory.role == 'upgrader');
    var upgraders2 = _.filter(Game.creeps, (creep) => creep.memory.role == 'upgrader2');
    var transfers = _.filter(Game.creeps, (creep) => creep.memory.role == 'transfer');

    if (harvesters.length < 2)
        Game.spawns['Spawn1'].spawnCreep([WORK, WORK, WORK, CARRY, CARRY, MOVE, MOVE, MOVE, MOVE], 'harvester' + Math.floor(Math.random() * 10000), { memory: { role: 'harvester' } })
    else if ( transfers.length < 1)
        Game.spawns['Spawn1'].spawnCreep([WORK, CARRY, CARRY, CARRY,CARRY,CARRY,CARRY,MOVE,MOVE,MOVE,MOVE,MOVE,MOVE, MOVE], 'transfer' + Math.floor(Math.random() * 10000), { memory: { role: 'transfer' } })
    else if (upgraders.length < 4)
        Game.spawns['Spawn1'].spawnCreep([WORK, WORK, WORK, WORK, CARRY, MOVE], 'upgrader' + Math.floor(Math.random() * 10000), { memory: { role: 'upgrader' } })
    else if (Game.spawns['Spawn1'].pos.findClosestByRange(FIND_CONSTRUCTION_SITES) != null && builders.length < 4)
        Game.spawns['Spawn1'].spawnCreep([WORK, WORK, CARRY, CARRY, CARRY, MOVE], 'builder' + Math.floor(Math.random() * 10000), { memory: { role: 'builder' } })
    // else if (upgraders2.length < 4)
    //     Game.spawns['Spawn1'].spawnCreep([WORK, WORK,WORK,WORK, CARRY, CARRY, CARRY, MOVE,MOVE], '2upgrader' + Math.floor(Math.random() * 10000), { memory: { role: 'upgrader2' } })

    // for (var creep in harvesters)
    //     roleHarvester.run(Game.creeps[creep]);
    // for (var creep in builders)
    //     roleBuilder.run(Game.creeps[creep]);
    // for (var creep in upgraders)
    //     roleUpgrader.run(Game.creeps[creep]);
    // for (var creep in upgraders2)
    //     roleUpgrader2.run(Game.creeps[creep]);
    // for (var creep in transfers)
    //     roleTransfer.run(Game.creeps[creep]);


    for (var name in Game.creeps) {
        var creep = Game.creeps[name];
        if (creep.memory.role == 'harvester') {
            roleHarvester.run(creep);
        }
        if (creep.memory.role == 'upgrader') {
            roleUpgrader.run(creep);
        }
        if (creep.memory.role == 'transfer') {
            roleTransfer.run(creep);
        }
        if (creep.memory.role == 'upgrader2') {
            roleUpgrader2.run(creep);
        }
        if (creep.memory.role == 'builder') {
            roleBuilder.run(creep);
        }
    }

    if (Game.cpu.bucket == 10000)
        Game.cpu.generatePixel();

}