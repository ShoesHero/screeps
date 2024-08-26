var roleTransfer = {
    run: function (creep) {
        if (creep.store.getUsedCapacity() > 50) {
            var targets = creep.room.findClosestByRange(FIND_STRUCTURES, {
                filter: (structure) => {
                    return (structure.structureType == STRUCTURE_EXTENSION || structure.structureType == STRUCTURE_SPAWN || structure.structureType == STRUCTURE_TOWER) &&
                        structure.store.getFreeCapacity(RESOURCE_ENERGY) > 0;
                }
            })
            if (targets.length == 0) {
                var storage = creep.room.findClosestByRange(FIND_STRUCTURES, {
                    filter: (structure) => {
                        return (structure.structureType == STRUCTURE_STORAGE &&
                            structure.store.getFreeCapacity(RESOURCE_ENERGY) > 0);
                    }
                })
                if (creep.transfer(storage[storage.length - 1], RESOURCE_ENERGY) == ERR_NOT_IN_RANGE) {
                    creep.moveTo(storage[storage.length - 1]);
                }
            }
            else {
                if (creep.transfer(targets[targets.length - 1], RESOURCE_ENERGY) == ERR_NOT_IN_RANGE) {
                    creep.moveTo(targets[targets.length - 1]);
                }
            }
        }
        else{
            var containers = creep.room.findClosestByRange(FIND_STRUCTURES, {
                filter: (structure) => {
                    return (structure.structureType == STRUCTURE_CONTAINER &&
                        structure.store.getUsedCapacity(RESOURCE_ENERGY) > 0);
                }
            });
            if (creep.withdraw(containers[0]) == ERR_NOT_IN_RANGE) {
                creep.moveTo(containers[0]);
            }
        }
    }
}