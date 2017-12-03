const db = require('../DataLayer/dbManager');

let companyModel = {
    getCompanies: function(callback) {
        return db.query('SELECT * FROM Company', callback);
    },
    getCompany: function(id, callback) {
        return db.query('SELECT * FROM Company WHERE idCompany = ' + id, callback);
    },
    addCompany: function(ev, callback) {
        return db.query('INSERT INTO `Company` VALUES (?,?,?,?)', [null, ev.name, ev.phone, ev.email], callback);
    },
    deleteCompany: function(id, callback) {
        return db.query('DELETE FROM `Company` WHERE idCompany = ' + id, callback);
    },
    updateCompany: function(id, ev, callback) {
        return db.query('UPDATE `Company` SET name = ?, phone = ?, email = ? WHERE idCompany = ' + id + ';', [ev.name, ev.phone, ev.email], callback);
    }
};

module.exports = companyModel;