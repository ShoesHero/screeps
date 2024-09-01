var roleMelee = {
    run: function (creep) {
        if (creep.room.name == 'W46N3') {
            var enemy = creep.pos.findClosestByRange(FIND_HOSTILE_CREEPS);
            if (creep.attack(enemy[0]) == ERR_NOT_IN_RANGE) {
                creep.moveTo(enemy[0]);
            }
        }
        else {
            creep.moveTo(new RoomPosition(30, 2, 'W46N3'), { visualizePathStyle: { stroke: '#ffaa00' } })
        }
    }
}

module.exports = roleMelee;