const db = require('../DataLayer/dbManager');

let activityModel = {
    getActivities: function(callback) {
        return db.query('SELECT idActivity, Event_idEvent, startTime , endTime ,  `name` ,  `description`, location FROM Activity ORDER BY startTime ASC', callback);
    },
    getActivity: function(id, callback) {
        return db.query('SELECT idActivity, Event_idEvent, startTime, endTimE, name, description, location FROM `Activity` WHERE idActivity = ' + id, callback);
    },
    addActivity: function(ev, callback) {
        return db.query('INSERT INTO `Activity` VALUES (?,?,?,?,?,?,?)', [null, ev.Event_idEvent, ev.startTime, ev.endTime, ev.name, ev.description, ev.location], callback);
    },
    deleteActivity: function(id, callback) {
        return db.query('DELETE FROM `Activity` WHERE idActivity = ' + id, callback);
    },
    UpdateActivity: function(id, ev, callback) {
        return db.query('UPDATE `Activity` SET Event_idEvent = ?, startTime = ?, endTime = ?, name = ?, description = ?, location = ? WHERE idActivity = ' + id + ';', [ev.Event_idEvent, ev.startTime, ev.endTime, ev.name, ev.description], callback);
    }
};

module.exports = activityModel;