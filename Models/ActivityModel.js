const db = require('../DataLayer/dbManager');

let activityModel = {
    getactivities: function(callback){
        return db.query('SELECT * FROM activity',callback);
    },
    getactivity: function(id, callback){
        return db.query('SELECT * FROM activity WHERE idactivity = ' + id,callback);
    },
    addActivity: function(ev ,callback){
        return db.query('INSERT INTO `activity` VALUES (?,?,?,?,?,?)', [null, ev.Event_idEvent, ev.startTime,ev.endTime, ev.name, ev.description] , callback);
    },
    deleteActivity: function(id,callback) {
        return db.query('DELETE FROM `activity` WHERE idActivity = ' + id, callback);
    },
    UpdateActivity: function(id, ev, callback) {
        return db.query('UPDATE activity SET Event_idEvent = ?, startTime = ?, endTime = ?, name = ?, description = ? WHERE idactivity = ' + id, [ev.Event_idEvent, ev.startTime,ev.endTime, ev.name, ev.description], callback);
        //validate empty data on the fron-end
    }
}

module.exports = activityModel;