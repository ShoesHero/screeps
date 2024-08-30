
var roleBasicBuilder = {

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
            const target = creep.pos.findClosestByRange(FIND_CONSTRUCTION_SITES);
            if (creep.build(target) == ERR_NOT_IN_RANGE) {
                    creep.moveTo(target);
            }
            if (creep.store.getUsedCapacity() == 0)
                creep.memory.output = 0;

        }
    }
};
module.exports = roleBasicBuilder;