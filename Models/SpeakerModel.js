const db = require('../DataLayer/dbManager');

let speakerModel = {
    getSpeakers: function(callback) {
        return db.query('SELECT * FROM  `Speaker`', callback);
    },
    getSpeaker: function(id, callback) {
        return db.query('SELECT * FROM `Speaker` WHERE idSpeaker = ' + id, callback);
    },
    addSpeaker: function(ev, callback) {
        return db.query('INSERT INTO `Speaker` VALUES (?,?,?,?)', [null, ev.name, ev.title, ev.bio], callback);
    },
    deleteSpeaker: function(id, callback) {
        return db.query('DELETE FROM `Speaker` WHERE idSpeaker = ' + id, callback);
    },
    updateSpeaker: function(id, ev, callback) {
        return db.query('UPDATE  `Speaker` SET  `name`= ?, `title`= ?, `bio`= ? WHERE  `Speaker`.`idSpeaker` =  ' + id + ';', [ev.name, ev.title, ev.bio], callback);
    }
};

module.exports = speakerModel;