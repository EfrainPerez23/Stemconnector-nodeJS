const db = require('../DataLayer/dbManager');

let eventModel = {
    getEvents: function(callback) {
        return db.query('SELECT * FROM Event a INNER JOIN Event e ON a.Event_idEvent = e.idEvent', callback);
    },
    getEvent: function(id, callback) {
        return db.query('SELECT *  FROM Event e INNER JOIN Activity a ON a.Event_idEvent = e.idEvent WHERE a.Event_idEvent =' + id, callback);
    },
    addEvent: function(ev, callback) {
        return db.query('INSERT INTO `Event` VALUES (?,?,?,?,?,?,?,?,?)', [null, ev.name, ev.description, ev.status, ev.startDate, ev.endDate, ev.idInitiative, ev.email, ev.localizacion], callback);
    },
    deleteEvent: function(id, callback) {
        return db.query('DELETE FROM `Event` WHERE idEvent = ' + id, callback);
    },
    UpdateEvent: function(id, ev, callback) {
        return db.query('UPDATE `Event` SET name = ?, description = ?, status = ?, startDate = ?, endDate = ?, idInitiative = ?, email = ?, location = ? WHERE idEvent = ' + id, [ev.name, ev.description, ev.status, ev.startDate, ev.endDate, ev.idInitiative, ev.email, ev.location], callback);
    }
}

module.exports = eventModel;