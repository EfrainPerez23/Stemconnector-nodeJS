const db = require('../DataLayer/dbManager');

let activityModel = {
    getActivities: function(callback) {
        return db.query('SELECT * FROM  `Activity`', callback);
    },
    getActivity: function(id, callback) {
        return db.query('SELECT * FROM `Activity` WHERE idActivity = ' + id, callback);
    },
    addActivity: function(ev, callback) {
        return db.query('INSERT INTO `Activity` VALUES (?,?,?,?,?,?)', [null, ev.Event_idEvent, ev.startTime, ev.endTime, ev.name, ev.description], callback);
    },
    deleteActivity: function(id, callback) {
        return db.query('DELETE FROM `Activity` WHERE idActivity = ' + id, callback);
    },
    UpdateActivity: function(id, ev, callback) {
        return db.query('UPDATE `Activity` SET Event_idEvent = ?, startTime = ?, endTime = ?, name = ?, description = ? WHERE idactivity = ' + id, [ev.Event_idEvent, ev.startTime, ev.endTime, ev.name, ev.description], callback);
    }
}

module.exports = activityModel;