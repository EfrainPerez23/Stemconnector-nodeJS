const db = require('../DataLayer/dbManager');

let InitiativeModel = {
    getInitiatives: function(callback) {
        return db.query('SELECT * FROM  `Initiative`', callback);
    },
    getInitiative: function(id, callback) {
        return db.query('SELECT * FROM `Initiative` WHERE idInitiative = ' + id, callback);
    },
    addIni: function(ini, callback) {
        return db.query('INSERT INTO `Initiative` (`name`,`description`, `imageUrl`) VALUES (?,?,?)', [ini.name, ini.description, ini.imageUrl], callback);
    },
    deleteIni: function(id, callback) {
        return db.query('DELETE FROM `Initiative` WHERE idInitiative = ' + id, callback);
    },
    updateIni: function(id, ini, callback) {
        return db.query('UPDATE `Initiative` SET name = ?, description = ?, imageUrl = ? WHERE idInitiative = ' + id, [ini.name, ini.description, ini.imageUrl], callback);
        //validate empty data on the fron-end
    },
    events: function(id, callback) {
        return db.query('SELECT NAME, DESCRIPTION, STATUS, STARTDATE, ENDDATE FROM `Initiative` WHERE IDINITIATIVE = ' + id, callback);
    }
}

module.exports = InitiativeModel;