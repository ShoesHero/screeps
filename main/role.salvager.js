
var role = {
    run: function (creep) {
        var drope = creep.room.find(FIND_SOURCES_ACTIVE);

        if (drope.length > 0 && creep.room.name == 'W49N3') {
            if (creep.pickup(drope[0], RESOURCES_ALL) == ERR_NOT_IN_RANGE) {  // 指定资源类型
                creep.moveTo(drope[0], { visualizePathStyle: { stroke: '#ffaa00' } });
            }
            console.log('开始拾荒');
        }
    }

}
module.exports = role;




