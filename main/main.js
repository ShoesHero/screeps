var roleHarvester = require('role.harvester');
var roleUpgrader = require('role.upgrader');
var roleUpgrader2 = require('role.upgrader2');
var roleBuilder = require('role.builder');
var roleTransfer = require('role.transfer');
var roleExternalBuilder = require('role.externalBuilder');
var rsalvager = require('role.salvager');
var roleExternalHarvester = require('role.externalHarvester')
var roleExternalTransfer = require('role.externalTransfer')
var roleMelee = require('role.melee')
var roleClaimmer = require('role.claimmer')
var N = require('roleNumbers');
const roleBasicHarvester = require('./role.basicharvester');
const roleBasicBuilder = require('./role.basicBuilder');
const roleMiner = require('./role.miner');
const roleFiller = require('./role.filler');

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
    
    var tower = Game.getObjectById('66cd4d55d895956b12dd8ad4');
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
    var upgrader1 = _.filter(Game.creeps, (creep) => (creep.memory.role == 'upgrader' && creep.room.name == 'W49N3'));

    var transfers = _.filter(Game.creeps, (creep) => creep.memory.role == 'transfer');
    var ebuilders = _.filter(Game.creeps, (creep) => creep.memory.role == 'eBuilder');
    var eHarvesters = _.filter(Game.creeps, (creep) => creep.memory.role == 'eHarvester');
    var eTransfers = _.filter(Game.creeps, (creep) => creep.memory.role == 'eTransfer');
    var miners = _.filter(Game.creeps, (creep) => creep.memory.role == 'miner');
    var bH = _.filter(Game.creeps, (creep) => creep.memory.role == 'bH');
    var bB = _.filter(Game.creeps, (creep) => creep.memory.role == 'bB');
    var filler  = _.filter(Game.creeps, (creep) => creep.memory.role == 'filler');


    var upgrader2 = _.filter(Game.creeps, (creep) => (creep.memory.role == 'upgrader' && creep.room.name == 'W46N3'));

    if (filler.length < N.Filler)
        Game.spawns['Spawn1'].spawnCreep([CARRY, CARRY,CARRY, MOVE, MOVE, MOVE], 'filler' + Math.floor(Math.random() * 10000), { memory: { role: 'filler' } })
    if (harvesters.length < N.Harvester)
        Game.spawns['Spawn1'].spawnCreep([WORK, WORK, WORK, CARRY, CARRY, MOVE, MOVE, MOVE], 'harvester' + Math.floor(Math.random() * 10000), { memory: { role: 'harvester' } })
    else if (transfers.length < N.Transfer)
        Game.spawns['Spawn1'].spawnCreep([CARRY, CARRY, CARRY, CARRY, CARRY, CARRY, MOVE, MOVE, MOVE, MOVE, MOVE, MOVE], 'transfer' + Math.floor(Math.random() * 10000), { memory: { role: 'transfer' } })
    else if (miners.length < N.Miner)
        Game.spawns['Spawn1'].spawnCreep([WORK, WORK, WORK, WORK, CARRY, CARRY, CARRY, CARRY, MOVE, MOVE, MOVE, MOVE], 'miner' + Math.floor(Math.random() * 10000), { memory: { role: 'miner' } })
    else if (upgrader1.length < N.Upgrader)
        Game.spawns['Spawn1'].spawnCreep([WORK, WORK, WORK, WORK, CARRY, MOVE], 'upgrader' + Math.floor(Math.random() * 10000), { memory: { role: 'upgrader' } })
    else if (eHarvesters.length < N.EHarvester)
        Game.spawns['Spawn1'].spawnCreep([WORK, WORK, WORK, MOVE, MOVE, MOVE], 'eHarvester' + Math.floor(Math.random() * 10000), { memory: { role: 'eHarvester' } })
    else if (eTransfers.length < N.ETransfer)
        Game.spawns['Spawn1'].spawnCreep([WORK, CARRY, CARRY, CARRY, CARRY, CARRY, CARRY, MOVE, MOVE, MOVE, MOVE, MOVE, MOVE, MOVE], 'eTransfer' + Math.floor(Math.random() * 10000), { memory: { role: 'eTransfer' } })
    else if (Game.spawns['Spawn1'].pos.findClosestByRange(FIND_CONSTRUCTION_SITES) != null && builders.length < N.Builder)
        Game.spawns['Spawn1'].spawnCreep([WORK, WORK, CARRY, CARRY, CARRY, MOVE], 'builder' + Math.floor(Math.random() * 10000), { memory: { role: 'builder' } })
    else if (ebuilders.length < N.EBuilder)
        Game.spawns['Spawn1'].spawnCreep([WORK, WORK, WORK,WORK, CARRY, CARRY, MOVE, MOVE, MOVE, MOVE, MOVE, MOVE], 'eBuilder' + Math.floor(Math.random() * 10000), { memory: { role: 'eBuilder' } })



    if (bH.length < 2)
        Game.spawns['Spawn2'].spawnCreep([WORK, WORK, CARRY, MOVE], 'bH' + Math.floor(Math.random() * 10000), { memory: { role: 'bH' } })
    else if (bB.length < 2)
        Game.spawns['Spawn2'].spawnCreep([WORK, WORK, CARRY, MOVE], 'bB' + Math.floor(Math.random() * 10000), { memory: { role: 'bB' } })
    else if (upgrader2.length < 4)
        Game.spawns['Spawn2'].spawnCreep([WORK, WORK, CARRY, MOVE], 'upgrader' + Math.floor(Math.random() * 10000), { memory: { role: 'upgrader' } })


    for (var name in Game.creeps) {
        var creep = Game.creeps[name];
        if (creep.memory.role == 'harvester') {
            roleHarvester.run(creep);
        }
        else if (creep.memory.role == 'upgrader') {
            roleUpgrader.run(creep);
        }
        else if (creep.memory.role == 'transfer') {
            roleTransfer.run(creep);
        }
        else if (creep.memory.role == 'builder') {
            roleBuilder.run(creep);
        }
        else if (creep.memory.role == 'eBuilder') {
            roleExternalBuilder.run(creep);
        }
        else if (creep.memory.role == 'eHarvester') {
            roleExternalHarvester.run(creep);
        }
        else if (creep.memory.role == 'eTransfer') {
            roleExternalTransfer.run(creep);
        }
        else if (creep.memory.role == 'es') {
            rsalvager.run(creep);
        }
        else if (creep.memory.role == 'melee') {
            roleMelee.run(creep);
        }
        else if (creep.memory.role == 'claimmer') {
            roleClaimmer.run(creep);
        }
        else if (creep.memory.role == 'bH') {
            roleBasicHarvester.run(creep);
        }
        else if (creep.memory.role == 'bB') {
            roleBasicBuilder.run(creep);
        }
        else if (creep.memory.role == 'miner') {
            roleMiner.run(creep);
        }
        else if (creep.memory.role == 'filler') {
            roleFiller.run(creep);
        }
    }

    if (Game.cpu.bucket == 10000)
        Game.cpu.generatePixel();


}