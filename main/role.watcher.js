var roleWatcher = {
    run: function (creep) {
        creep.moveTo(new RoomPosition(31, 1, 'W49N2'), { visualizePathStyle: { stroke: '#ffaa00' } })
    }
}

module.exports = roleWatcher;