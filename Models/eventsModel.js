const db = require('../DataLayer/dbManager');

let eventModel = {
    getEvents: function(callback) {
        return db.query('SELECT * FROM Event', callback);
    },
    getEvent: function(id, callback) {
        return db.query('SELECT *  FROM Event WHERE idEvent = ' + id, callback);
    },
    addEvent: function(ev, callback) {
        return db.query('INSERT INTO `Event` VALUES (?,?,?,?,?,?,?,?,?, ?)', [null, ev.name, ev.description, ev.status, ev.startDate, ev.endDate, ev.Initiative_idInitiative, ev.location, ev.email, ev.imageUrl], callback);
    },
    deleteEvent: function(id, callback) {
        return db.query('DELETE FROM `Event` WHERE idEvent = ' + id, callback);
    },
    UpdateEvent: function(id, ev, callback) {
        console.log(id);
        return db.query('UPDATE `Event` SET idEvent = null, name = ?, description = ?, status = ?, startDate = ?, endDate = ?, Initiative_idInitiative = ?, location = ?, email = ?, imageUrl = ? WHERE idEvent = ' + id, [ev.name, ev.description, ev.status, ev.startDate, ev.endDate, ev.Initiative_idInitiative, ev.email, ev.location, ev.imageUrl], callback);
    },
    ActivitiesEvent: function(id, callback) {
        return db.query('SELECT * FROM Activity WHERE Event_idEvent = ' + id + 'ORDER BY 3 ASC ', callback);
    },
    SpeakersEvent: function(id, callback) {
        return db.query('SELECT s.idSpeaker, s.name, s.title, s.bio, s.imageUrl FROM Event e INNER JOIN Event_has_Speaker es ON e.idEvent = es.Event_idEvent INNER JOIN Speaker s ON es.Speaker_idSpeaker = s.idSpeaker WHERE e.idEvent = ' + id, callback);
    },
    searchEvent: function(ev, callback) {
        var request = 'SELECT * FROM Event WHERE name LIKE \'%' + ev.name + '%\';';
        return db.query(request, callback);
    }
};

module.exports = eventModel;