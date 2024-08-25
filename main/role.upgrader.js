var roleUpgrader = {

    /** @param {Creep} creep **/
    run: function (creep) {
        if (creep.store.getFreeCapacity() > 0 && creep.memory.output == 0) {
            var sources = creep.room.find(FIND_SOURCES);
            if (creep.memory.role == 'harvester') {
                if (creep.harvest(sources[1]) == ERR_NOT_IN_RANGE) {
                    creep.moveTo(sources[1]);
                }
            }
            else {
                if (creep.harvest(sources[0]) == ERR_NOT_IN_RANGE) {
                    creep.moveTo(sources[0]);
                }
            }

        }
        else {
            creep.memory.output = 1;
            if (creep.upgradeController(creep.room.controller) == ERR_NOT_IN_RANGE) {
                creep.moveTo(creep.room.controller);
            }
            if (creep.store.getUsedCapacity() == 0)
                creep.memory.output = 0;
        }
    }
};

module.exports = roleUpgrader;