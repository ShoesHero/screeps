const { filter } = require("lodash");

var roleHarvester = {

    /** @param {Creep} creep **/
    run: function (creep) {
        if (creep.store.getFreeCapacity() > 0 && creep.memory.output == 0) {
            var sources = creep.room.find(FIND_SOURCES);
            if (creep.harvest(sources[1]) == ERR_NOT_IN_RANGE) {
                creep.moveTo(sources[1]);
            }
        }
        else {
            creep.memory.output = 1;
            if (creep.pos.findInRange(STRUCTURE_ROAD, 1, {
                filter: function (object) {
                    return object.hits < 3500;
                }
            }))
            creep.repair(creep.pos);
                var targets = creep.room.find(FIND_STRUCTURES, {
                    filter: (structure) => {
                        return (structure.structureType == STRUCTURE_EXTENSION || structure.structureType == STRUCTURE_SPAWN || structure.structureType == STRUCTURE_TOWER) &&
                            structure.store.getFreeCapacity(RESOURCE_ENERGY) > 0;
                    }
                }
                )
            if (creep.transfer(targets[targets.length - 1], RESOURCE_ENERGY) == ERR_NOT_IN_RANGE) {
                creep.moveTo(targets[targets.length - 1]);
            }
            if (creep.store.getUsedCapacity() == 0)
                creep.memory.output = 0;
        }
    }
};
module.exports = roleHarvester;