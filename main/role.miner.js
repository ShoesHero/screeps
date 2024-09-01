var roleMiner = {
    run: function(creep){
        if (creep.store.getFreeCapacity() > 0 && creep.memory.output == 0 && creep.ticksToLive > 30) {
            var mine = creep.room.find(FIND_MINERALS);
            if (creep.harvest(mine[0]) == ERR_NOT_IN_RANGE) {
                creep.moveTo(mine[0]);
            }
        }
        else {
            creep.memory.output = 1;
            var targets = creep.room.find(FIND_STRUCTURES, {
                filter: (structure) => {
                    return (structure.structureType == STRUCTURE_TERMINAL)
                }
            })
            if (creep.transfer(targets[0], RESOURCE_UTRIUM) == ERR_NOT_IN_RANGE) {
                creep.moveTo(targets[0]);
            }
            if (creep.store.getUsedCapacity() == 0)
                creep.memory.output = 0;

        }
    }
}

module.exports = roleMiner;