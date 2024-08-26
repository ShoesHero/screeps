var roleBuilder = {

    /** @param {Creep} creep **/
    run: function (creep) {
        if (creep.store.getFreeCapacity() > 0 && creep.memory.output == 0) {
            var sources = creep.room.find(FIND_STRUCTURES, {
                filter: (structure) => {
                    return (structure.structureType == STRUCTURE_STORAGE)
                }
            })
            if (creep.withdraw(sources[0]) == ERR_NOT_IN_RANGE) {
                creep.moveTo(sources[0]);
            }
        }
        else {
            creep.memory.output=1;
            const target = creep.pos.findClosestByRange(FIND_CONSTRUCTION_SITES);
            if (creep.build(target) == ERR_NOT_IN_RANGE) {
                    creep.moveTo(target);
            }
            if(creep.store.getUsedCapacity() == 0)
            creep.memory.output=0;
        }
    }
};

module.exports = roleBuilder
