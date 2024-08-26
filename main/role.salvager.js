var drope = creep.room.find(FIND_TOMBSTONES);

if (drope.length > 0 && creep.room.name == 'W49N3') {  
    if (creep.withdraw(drope[0], RESOURCE_ALL) == ERR_NOT_IN_RANGE) {  // 指定资源类型
        creep.moveTo(drope[0], { visualizePathStyle: { stroke: '#ffaa00' } });
    }
    console.log('开始拾荒');
}

