var roleExternalBuilder = {

    /** @param {Creep} creep **/
    run: function (creep) {
        if (creep.room.name != 'W46N3')
            creep.moveTo(new RoomPosition(30, 49, 'W46N3'), { visualizePathStyle: { stroke: '#ffaa00' } })
        else {
            if (creep.store.getFreeCapacity() > 0 && creep.memory.output == 0) {
                if (creep.room.name == 'W49N3') {
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
        }

    }


}


module.exports = roleExternalBuilder
