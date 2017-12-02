const db = require('../DataLayer/dbManager');

let speakerModel = {
    getSpeakers: function(callback) {
        return db.query('SELECT * FROM  `Speaker`', callback);
    },
    getSpeaker: function(id, callback) {
        return db.query('SELECT * FROM `Speaker` WHERE idSpeaker = ' + id, callback);
    },
    addSpeaker: function(ev, callback) {
        return db.query('INSERT INTO `Speaker` VALUES (?,?,?,?,?)', [null, ev.name, ev.title, ev.bio, ev.imageUrl], callback);
    },
    deleteSpeaker: function(id, callback) {
        return db.query('DELETE FROM `Speaker` WHERE idSpeaker = ' + id, callback);
    },
    updateSpeaker: function(id, ev, callback) {
        return db.query('UPDATE  `Speaker` SET  `name`= ?, `title`= ?, `bio`= ?, `imageUrl`= ? WHERE  `Speaker`.`idSpeaker` =  ' + id + ';', [ev.name, ev.title, ev.bio, ev.imageUrl], callback);
    },
    addEvent_has_Speaker: function(ev, callback) {
        return db.query('INSERT INTO `Event_has_Speaker` VALUES(?,?)', [ev.Event_idEvent, ev.Speaker_idSpeaker], callback);
    },
    lastIdSpeaker: function(callback) {
        return db.query('SELECT idSpeaker AS  lastId FROM Speaker ORDER BY 1 DESC  LIMIT 1', callback);
    },
    deleteEvent_has_Speaker: function(id, callback) {
        return db.query('DELETE FROM `Event_has_Speaker` WHERE Speaker_idSpeaker = ' + id, callback);
    },
    eventsSpeaker: function(id, callback) {
        return db.query('SELECT e.idEvent, e.name, e.description, e.status, e.startDate, e.endDate, e.Initiative_idInitiative, e.location, e.email, e.imageUrl FROM Speaker s INNER JOIN Event_has_Speaker es ON s.idSpeaker = es.Speaker_idSpeaker INNER JOIN Event e ON es.Event_idEvent = e.idEvent WHERE s.idSpeaker =' + id + ';', callback);
    },
    deleteEventsSpeaker: function(idEvent, idSpeaker, callback) {
        return db.query('DELETE FROM `Event_has_Speaker` WHERE Event_idEvent = ' + idEvent + 'AND Speaker_idSpeaker = ' + idSpeaker, callback);
    }
};

module.exports = speakerModel;