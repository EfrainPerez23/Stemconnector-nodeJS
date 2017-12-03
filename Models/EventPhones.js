const db = require('../DataLayer/dbManager');

let activityModel = {
    getEventPhones: function(callback) {
        return db.query('SELECT * FROM EventPhone', callback);
    },
    getEventPhone: function(id, callback) {
        return db.query('SELECT * FROM EventPhone WHERE idEventPhone = ' + id, callback);
    },
    addEventPhone: function(ev, callback) {
        return db.query('INSERT INTO `EventPhone` VALUES (?,?,?)', [null, ev.phone, ev.Event_idEvent], callback);
    },
    deleteEventPhone: function(id, callback) {
        return db.query('DELETE FROM `EventPhone` WHERE idEventPhone = ' + id, callback);
    },
    UpdateEventPhone: function(id, ev, callback) {
        return db.query('UPDATE `EventPhone` SET phone = ?, Event_idEvent = ? WHERE idEventPhone = ' + id + ';', [ev.phone, ev.Event_idEvent], callback);
    },
    eventPhones: function(idEvent, callback) {
        return db.query('SELECT * FROM EventPhone Where Event_idEvent = ' + idEvent, callback);
    }
};

module.exports = activityModel;