
var role = {
    run: function (creep) {
        var drope = creep.room.find(FIND_DROPPED_RESOURCES);

        if (drope.length > 0 && creep.room.name == 'W49N3') {
            if (creep.pickup(drope[0], RESOURCES_ALL) == ERR_NOT_IN_RANGE) {  // 指定资源类型
                creep.moveTo(drope[0], { visualizePathStyle: { stroke: '#ffaa00' } });
            }
            console.log('开始拾荒');
        }

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
        }
    }

module.exports = role;




