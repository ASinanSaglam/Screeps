var roomAnalyzer = {
    analysis: {
      'spawns': [],
      'creeps': [],
      'sources': [], 
      'enerAvail': undefined,
      'enerCap': undefined
    },
    
    run: function(room) {
        var spawns = [];
        var creeps = [];
        var sources = [];
        var enemies = [];

        this.analysis['enerAvail'] = room.energyAvailable;
        this.analysis['enerCap'] = room.energyCapacityAvailable;
        this.analysis['spawns'] = room.find(FIND_MY_SPAWNS);
        this.analysis['creeps'] = room.find(FIND_MY_CREEPS);
        this.analysis['sources'] = room.find(FIND_SOURCES);
        
        return this.analysis;
    }
};

module.exports = roomAnalyzer;
