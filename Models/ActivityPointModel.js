const db = require('../DataLayer/dbManager');

let activityModel = {
    getActivityPoints: function(callback) {
        return db.query('SELECT * FROM Point', callback);
    },
    getActivityPoint: function(id, callback) {
        return db.query('SELECT * FROM Point WHERE id = ' + id, callback);
    },
    addActivityPoint: function(ev, callback) {
        return db.query('INSERT INTO `Point` VALUES (?,?,?)', [null, ev.Activity_idActivity, ev.description], callback);
    },
    deleteActivityPoint: function(id, callback) {
        return db.query('DELETE FROM `Point` WHERE id = ' + id, callback);
    },
    updateActivityPoint: function(id, ev, callback) {
        return db.query('UPDATE `Point` SET Activity_idActivity = ?, description = ? WHERE id = ' + id + ';', [ev.Activity_idActivity, ev.description], callback);
    }
};

module.exports = activityModel;