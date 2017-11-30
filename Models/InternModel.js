const db = require('../DataLayer/dbManager');

let internModel = {
    getInterns: function(callback) {
        return db.query('SELECT * FROM  `Intern`', callback);
    },
    getIntern: function(id, callback) {
        return db.query('SELECT * FROM `Intern` WHERE idIntern = ' + id, callback);
    },
    addIntern: function(ev, callback) {
        return db.query('INSERT INTO `Intern` VALUES (?,?,?,?,?,?)', [null, ev.name, ev.country, ev.photo, ev.flagImage, ev.description], callback);
    },
    deleteIntern: function(id, callback) {
        return db.query('DELETE FROM `Intern` WHERE idIntern = ' + id, callback);
    },
    updateIntern: function(id, ev, callback) {
        return db.query('UPDATE  `Intern` SET  `name`= ?, `country`= ?, `photo`= ?, `flagImage`= ?, `description`= ? WHERE  `Intern`.`idIntern` =  ' + id + ';', [ev.name, ev.country, ev.photo, ev.flagImage, ev.description], callback);
    }
};

module.exports = internModel;