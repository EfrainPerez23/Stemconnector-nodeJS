const db = require('../DataLayer/dbManager');
let password = 'STEM20!nConnector';

let adminModel = {
    getAdmins: function(callback) {
        return db.query('SELECT idAdmin, name, email, rol, Company_idCompany FROM Admin', callback);
    },
    getAdmin: function(id, callback) {
        return db.query('SELECT idAdmin, name, email, rol, Company_idCompany FROM Admin WHERE idAdmin = ' + id, callback);
    },
    addAdmin: function(ev, callback) {
        return db.query(`INSERT INTO Admin VALUES (?,?,?,?,aes_encrypt(?, '${password}' ),?)`, [null, ev.name, ev.email, ev.rol, ev.password, ev.Company_idCompany], callback);
    },
    deleteAdmin: function(id, callback) {
        return db.query('DELETE FROM `Admin` WHERE idAdmin = ' + id, callback);
    },
    UpdateAdmin: function(id, ev, callback) {
        return db.query(`UPDATE Admin SET name = ?, email = ?, rol = ?, password = aes_encrypt(?, '${password}'), Company_idCompany = ? WHERE idAdmin = ${id} `, [ev.name, ev.email, ev.rol, ev.password, ev.Company_idCompany], callback);
    },
    checkAdmin: function(ev, callback) {
        return db.query(`SELECT EXISTS (SELECT 1 FROM Admin WHERE email = '${ev.email}' AND password = aes_encrypt('${ev.password}', '${password}')) as 'exist'`, callback);
    }

    // SELECT EXISTS (SELECT 1 FROM Admin WHERE email = 'ejemplo@gmail.com' AND password = aes_encrypt('ejemplo', 'abc123')) as exist;
};

module.exports = adminModel;