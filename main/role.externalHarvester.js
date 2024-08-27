const { filter } = require("lodash");

var roleExternalHarvester = {

    /** @param {Creep} creep **/
    run: function (creep) {
        if (creep.room.name == 'W49N2') {
            var sources = creep.room.find(FIND_SOURCES);
            if (creep.harvest(sources[0]) == ERR_NOT_IN_RANGE) {
                creep.moveTo(sources[0]);
            }
        }
        else {
            creep.moveTo(new RoomPosition(30, 2, 'W49N2'), { visualizePathStyle: { stroke: '#ffaa00' } })
        }
    }
};
module.exports = roleExternalHarvester;