const express = require('express');
const router = express.Router();
const db = require('./../../DataLayer/dbManager.js');
const eventControl = require('../../Models/eventsModel')


// get list of Events
router.get('/:id?', (req, res) => {
    const id = db.escape(req.params.id);
    if (req.params.id) {
        eventControl.getEvent(id, function(err, result) {
            // Server err
            if (err) {
                res.status(500);
                return res.json({ "success": false, status: 500, "message": "could not retrieve data" })
            }
            // 404 not Found
            if (!result.length) {
                res.status(404);
                return res.json({ "success": false, status: 404, "message": "could not retrieve data" })
            }

            res.status(200).json({ "success": true, status: 200, "message": "", "data": result });
        });
    } else {
        eventControl.getEvents(function(err, result) {
            //server err
            if (err) {
                res.status(500);
                return res.json({ "success": false, status: 500, "message": "could not retrieve data" })
            }
            // 404 not Found
            if (!result.length) {
                res.status(404);
                return res.json({ errors: ['Their are no events'] })
            }
            res.status(200).json({ "success": true, status: 200, "message": "", "data": result });
        });
    }
});
// router.get('/getEvents', (req, res) => {
//     let sql = 'SELECT * FROM event';
//     let query = db.query(sql, (err, result) => {
//         if (err) {
//             db.on('error', (err) => {

//                 console.log("[mysql error]", err);
//             });
//             return res.status(500).send('There was a problem adding information to the databse' + err);
//         }
//         res.json(result);
//     });
// });

// post - Insert Events
router.post('/add', function(req, res) {
    eventControl.addEvent(req.body, function(err, result) {
        if (err) {
            db.on('error', (dbErr) => {
                console.log('[mysql error]', dbErr);
            });
            console.log(err);
            return res.json({ "success": false, status: 500, "message": "could not retrieve data" })
        }

        res.status(200).json({ "success": true, status: 200, "message": "", "data": result });
    });
});

// router.post('/addEvent', (req, res) => {
//     let post = { name: req.body.name, description: req.body.description, status: req.body.status, startDate: req.body.startDate, endDate: req.body.endDate, idInitiative: req.body.idInitiative };
//     let sql = 'INSERT INTO event SET ?';
//     let query = db.query(sql, post, (err, result) => {
//         if (err) {
//             db.on('error', (dbErr) => {
//                 console.log('[mysql error]', dbErr);
//             });
//             return res.status(500).send(err);
//             console.log(err);
//         }
//         console.log(result);
//         res.status(200).send(result);
//     });
// });

// delete Events
router.delete('/delete/:id', function(req, res) {
    eventControl.deleteEvent(db.escape(req.params.id), function(err, result) {
        if (err) {
            db.on('error', (dbErr) => {
                console.log('[mysql error]', dbErr);
            });
            return res.json({ "success": false, status: 500, "message": "could not retrieve data" })
            console.log(err);
        }

        res.status(200).json({ "success": true, status: 200, "message": "", "data": result });
    });
});


// router.delete('/delete/:id', (req, res) => {
//     let sql = 'DELETE FROM event WHERE idEvent = ' + db.escape(req.params.id);
//     let query = db.query(sql, function (error, result) {
//         if (error) {
//             db.on('error', (err) => {
//                 console.log('[mysql error]', err);
//             });
//             return res.status(500).send(error);
//         }
//         console.log(result);
//         res.status(200).send(result);
//     })
// });
router.put('/update/:id', function(req, res) {
    eventControl.UpdateEvent(db.escape(req.params.id), req.body, function(err, result) {
        if (err) {
            db.on('error', (dbErr) => {
                console.log('[mysql error]', dbErr);
            });
            console.log(err);
            return res.json({ "success": false, status: 500, "message": "could not retrieve data" })
        }

        res.status(200).json({ "success": true, status: 200, "message": "", "data": result });
    });
});




// router.put('/update/:id', (req,res) => {
//     let post = { name: req.body.name, description: req.body.description, status: req.body.status, startDate: req.body.startDate, endDate: req.body.endDate };
//     let sql = 'UPDATE event SET ? WHERE idEvent = '+ db.escape(req.params.id);
//     let query = db.query(sql, post, (error, result, fields) =>{
//         if (error) {
//             db.on('error', (dbErr) => {
//                 console.log('[mysql error]', dbErr);
//             });
//             return res.status(500).send(error);
//         }
//         console.log(result);
//         res.status(200).send(result);
//     });
// });

module.exports = router;