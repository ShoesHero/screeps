var roleExternalBuilder = {

    /** @param {Creep} creep **/
    run: function (creep) {
        if (creep.store.getFreeCapacity() > 0 && creep.memory.output == 0) {
            if (creep.room.name == 'W49N3') {
                var sources = creep.room.find(FIND_STRUCTURES, {
                    filter: (structure) => {
                        return (structure.structureType == STRUCTURE_STORAGE)
                    }
                })
                if (creep.withdraw(sources[0], RESOURCE_ENERGY) == ERR_NOT_IN_RANGE) {
                    creep.moveTo(sources[0]);
                }
            }
            else {
                creep.moveTo(new RoomPosition(30, 49, 'W49N3'), { visualizePathStyle: { stroke: '#ffaa00' } })
            }
        }
        else {
            creep.memory.output = 1;
            if (creep.room.name == 'W49N2') {
                const target = creep.pos.findClosestByRange(FIND_CONSTRUCTION_SITES);
            if (creep.build(target) == ERR_NOT_IN_RANGE) {
                creep.moveTo(target);
            }
            if (creep.store.getUsedCapacity() == 0)
                creep.memory.output = 0;
            }
            else
            {
                creep.moveTo(new RoomPosition(30, 2, 'W49N2'), { visualizePathStyle: { stroke: '#ffaa00' } })
            }

        }
    }
};

module.exports = roleExternalBuilder
