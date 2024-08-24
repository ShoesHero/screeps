var roleHarvester = {

    /** @param {Creep} creep **/
    run: function(creep) {
	    if(creep.store.getFreeCapacity() > 0) {
            var sources = creep.room.find(FIND_SOURCES);
            if(creep.harvest(sources[1]) == ERR_NOT_IN_RANGE) {
                creep.moveTo(sources[1]);
            }
        }
        else {
            if(Game.spawns['Spawn1'].store.getFreeCapacity() < 20)
            {
                var vacantExtention = _.filter(Game.structures, (Structure)=>Structure.structureType='extension' && (Structure.getFreeCapacity > 0))
                if(creep.transfer(vacantExtention[0], RESOURCE_ENERGY) == ERR_NOT_IN_RANGE) {
                    creep.moveTo(vacantExtention[0]);
                }
            }
            else if(creep.transfer(Game.spawns['Spawn1'], RESOURCE_ENERGY) == ERR_NOT_IN_RANGE) {
                creep.moveTo(Game.spawns['Spawn1']);
            }
        }
	}
};
module.exports = roleHarvester;