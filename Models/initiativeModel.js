const db = require('../DataLayer/dbManager');

let InitiativeModel = {
    getInitiatives: function(callback){
        return db.query('SELECT * FROM INITIATIVE',callback);
    },
    getInitiative: function(id, callback){
        return db.query('SELECT * FROM INITIATIVE WHERE idInitiative = ' + id,callback);
    },
    addIni: function(ini ,callback){
        return db.query('INSERT INTO `INITIATIVE` (`name`,`description`, `imageUrl`) VALUES (?,?,?)', [ini.name, ini.description, ini.imageUrl] , callback);
    },
    deleteIni: function(id,callback) {
        return db.query('DELETE FROM INITIATIVE WHERE idInitiative = ' + id, callback);
    },
    updateIni: function(id, ini, callback) {
        return db.query('UPDATE INITIATIVE SET name = ?, description = ?, imageUrl = ? WHERE idInitiative = ' + id, [ini.name,ini.description,ini.imageUrl], callback);
        //validate empty data on the fron-end
    },
    events: function(id, callback){
        return db.query('SELECT NAME, DESCRIPTION, STATUS, STARTDATE, ENDDATE FROM EVENT WHERE IDINITIATIVE = ' + id, callback);
    }
}

module.exports = InitiativeModel;