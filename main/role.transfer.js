var roleTransfer = {
    run: function (creep) {
        if (creep.store.getUsedCapacity() > 0) {

            var storage = creep.room.find(FIND_STRUCTURES, {
                filter: (structure) => {
                    return (structure.structureType == STRUCTURE_STORAGE &&
                        structure.store.getFreeCapacity(RESOURCE_ENERGY) > 0);
                }
            })
            if (creep.transfer(storage[0], RESOURCE_ENERGY) == ERR_NOT_IN_RANGE) {
                creep.moveTo(storage[0]);
            }
        }

        else {
            var containers = creep.room.find(FIND_STRUCTURES, {
                filter: (structure) => {
                    return (structure.structureType == STRUCTURE_CONTAINER &&
                        structure.store.getUsedCapacity(RESOURCE_ENERGY) > 0);
                }
            })
            if (creep.withdraw(containers[0], RESOURCE_ENERGY) == ERR_NOT_IN_RANGE) {
                creep.moveTo(containers[0]);
            }
        }
    }
}

module.exports = roleTransfer;