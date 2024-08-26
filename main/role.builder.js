var roleBuilder = {

    /** @param {Creep} creep **/
    run: function (creep) {
        if (creep.store.getFreeCapacity() > 0 && creep.memory.output == 0) {
            var source = creep.room.findClosestByRange(STRUCTURE_STORAGE);
            if (creep.withdraw(source) == ERR_NOT_IN_RANGE) {
                creep.moveTo(source);
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
