const express = require('express');
const router = express.Router();
const db = require('../DataLayer/dbManager');
const iniControl = require('../Models/initiativeModel');
//inicio

//Get all Initiatives
router.get('/', (req,res) => {
    iniControl.getInitiatives(function(err,result){
        // Server err
        if(err){
            res.status(500);
            return res.json({errors: ['could not retrieve data']});
        }
        // 404 not Found
        if(!result.length){
            res.status(404);
            return res.json({errors: ['Their are no initiatives']})
        }
        res.status(200).json(result);
    });
});

router.get('/:id?', (req, res) => {
    const id = db.escape(req.params.id);
    iniControl.getInitiative(id ,function(err,result){
        // Server err
        if(err){
            res.status(500);
            return res.json({errors: ['could not retrieve data']});
        }
        // 404 not Found
        if(!result.length){
            res.status(404);
            return res.json({errors: ['Initiative not found']})
        }
        res.json(result);
    });
});

router.post('/add', function(req, res) {
    iniControl.addIni(req.body, function(err, result){
        if(err){
            db.on('error', (dbErr) => {
                console.log('[mysql error]', dbErr);
            });
                return res.status(500).send(err);
                console.log(err);
        }
        res.json(req.body);
    });
});



// router.get('/initiatives', (req,res) => {
//     //Query
//     let sql = 'SELECT * FROM Initiative';
//     let query = db.query(sql ,(err, result) => {
//         if (err) {
//             //SQL error
//             db.on('error', (err) => {

//                 console.log("[mysql error]", err);
//             });
//             return res.status(500).send('There was a problem adding information to the databse' + err);
//         }
//         //Send RESULT as JSON
//         res.send(result);
//     });
// });

router.delete('/delete/:id', function(req, res) {
    iniControl.deleteIni(db.escape(req.params.id), function(err, result){
        if(err){
            db.on('error', (dbErr) => {
                console.log('[mysql error]', dbErr);
            });
                return res.status(500).send(err);
                console.log(err);
        }
        // 404 not Found
        if(!result.length){
            res.status(404);
            return res.json({errors: ['This initiative doesn\'t exists or have been deleted']})
        }
        
        res.json(result);
    });
});

router.put('/update/:id', function(req, res) {
    iniControl.updateIni(db.escape(req.params.id), req.body, function(err, result){
        if(err){
            db.on('error', (dbErr) => {
                console.log('[mysql error]', dbErr);
            });
            console.log(err);
            return res.status(500).send(err);
                
        }
        // 404 not Found
        if(!result.length){
            res.status(404);
            return res.json({errors: ['This event doesn\'t exists ']})
        }
        res.json(result);
    });
});

router.get('/initEvents/:id?',(req,res) => {
    iniControl.events(db.escape(req.params.id),function(err, result){
        if (err) {
            db.on('error', (err) => {
                console.log("[mysql error]", err);
            });
            return res.status(500).send('There was a problem adding information to the databse' + err);
        }
        // 404 not Found
        if(!result.length){
            res.status(404);
            return res.json({errors: ['This initiative doesn\'t exists or has no events']})
        }

        res.json(result);
    });
});
//Get events of one initiative
// router.get('/initEvents/:id?', (req, res) => {
//     let sql = 'SELECT NAME, DESCRIPTION, STATUS, STARTDATE, ENDDATE FROM EVENT WHERE IDINITIATIVE = ' + db.escape(req.params.id);
//     let query = db.query(sql ,(err, result) => {
//         if (err) {
//             db.on('error', (err) => {

//                 console.log("[mysql error]", err);
//             });
//             return res.status(500).send('There was a problem adding information to the databse' + err);
//         }
//         res.json(result);
//     });
// });

module.exports = router;