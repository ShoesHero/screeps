var roleClaimmer =
{
    run: function (creep) {
        if (creep.room.name != 'W46N3') {
            creep.moveTo(new RoomPosition(9, 14, 'W46N3'))
        }
        else {
            if (creep.claimController(creep.room.controller) == ERR_NOT_IN_RANGE) {
                creep.moveTo(creep.room.controller);
            }
        }
    }
}

module.exports = roleClaimmer