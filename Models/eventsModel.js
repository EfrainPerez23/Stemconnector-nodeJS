const db = require('../DataLayer/dbManager');

let eventModel = {
    getEvents: function(callback){
        return db.query('SELECT * FROM EVENT',callback);
    },
    getEvent: function(id, callback){
        return db.query('SELECT * FROM EVENT WHERE idEvent = ' + id,callback);
    },
    addEvent: function(ev ,callback){
        return db.query('INSERT INTO `EVENT` VALUES (?,?,?,?,?,?,?,?,?)', [null, ev.name,ev.description, ev.status, ev.startDate, ev.endDate, ev.idInitiative, ev.email, ev.localizacion] , callback);
    },
    deleteEvent: function(id,callback) {
        return db.query('DELETE FROM EVENT WHERE idEvent = ' + id, callback);
    },
    UpdateEvent: function(id, ev, callback) {
        return db.query('UPDATE EVENT SET name = ?, description = ?, status = ?, startDate = ?, endDate = ?, idInitiative = ?, email = ?, localizacion = ? WHERE idEvent = ' + id, [ev.name,ev.description,ev.status,ev.startDate,ev.endDate,ev.idInitiative, ev.email, ev.localizacion], callback);
        //validate empty data on the fron-end
    }
}

module.exports = eventModel;
// eventModel.getEvents function(callback){
//     db.query('SELECT * FROM EVENT ORDER BY ID', (err, result) => {
//         if(err){
//             throw err;
//         }else
//             callback(null, result);
//     });
// },

// eventModel.getEvent = function(id,callback) {
//     if(!isNaN(id)){
//         db.query('SELECT * FROM EVENT WHERE ID =' + db.escape(id) ,(err, result) => {
//             if(err){
//                 throw err;
//             }else
//                 callback(null, result);
//         });
//     }
// },

// eventModel.insertUser = function(userData, callback) {
//     db.query('INSERT INTO EVENT SET ?',userData, (err,result) => {
//         if(err){
//             throw err;
//         }else
//             callback(null, {"insertID" :  result.insertID});
//     });
// }
// };


