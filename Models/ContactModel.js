const db = require('../DataLayer/dbManager');

let contactModel = {
    getContacts: function(callback) {
        return db.query('SELECT * FROM Contact', callback);
    },
    getContact: function(id, callback) {
        return db.query('SELECT * FROM Contact WHERE idContact = ' + id, callback);
    },
    addContact: function(ev, callback) {
        return db.query('INSERT INTO `Contact` VALUES (?,?,?,?,?,?,?)', [null, ev.linkedIn, ev.facebook, ev.googleP, ev.website, ev.Company_idCompany, ev.twitter], callback);
    },
    deleteContact: function(id, callback) {
        return db.query('DELETE FROM `Contact` WHERE idContact = ' + id, callback);
    },
    updateContact: function(id, ev, callback) {
        return db.query('UPDATE `Contact` SET linkedIn = ?, facebook = ?, googleP = ?, website = ?, Company_idCompany = ?, twitter = ? WHERE idContact = ' + id + ';', [ev.linkedIn, ev.facebook, ev.googleP, ev.website, ev.Company_idCompany, ev.twitter], callback);
    },
    getCompanyContact: function(id, callback) {
        return db.query('SELECT * FROM Contact WHERE Company_idCompany = ' + id, callback);
    }
};

module.exports = contactModel;