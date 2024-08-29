var roleExternalTransfer = {
    run: function (creep) {
        if (creep.store.getUsedCapacity() > 0) {
            
            var damagedStructures = creep.pos.findInRange(FIND_STRUCTURES, 1,{
                filter: (structure) => structure.hits / structure.hitsMax < 0.6 && (structure.structureType != STRUCTURE_WALL)
            });
            if (damagedStructures.length != 0) {
                creep.repair(damagedStructures[0]);
            }
            else
            {
                if(creep.room.name == 'W49N3')
            {
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
            else{
                creep.moveTo(new RoomPosition(30, 49, 'W49N3'), { visualizePathStyle: { stroke: '#ffaa00' } })
            }
            }


            
            
        }
        else{
            if(creep.room.name == 'W49N2')
            {
                 var containers = creep.room.find(FIND_STRUCTURES, {
                filter: (structure) => {
                    return (structure.structureType == STRUCTURE_CONTAINER &&
                        structure.store.getUsedCapacity(RESOURCE_ENERGY) > 0);
                }
            })
            if (creep.withdraw(containers[0],RESOURCE_ENERGY) == ERR_NOT_IN_RANGE) {
                creep.moveTo(containers[0]);
            }
            }
            else{
                creep.moveTo(new RoomPosition(30, 2, 'W49N2'), { visualizePathStyle: { stroke: '#ffaa00' } })
            }
           
        }
    }
}

module.exports = roleExternalTransfer;