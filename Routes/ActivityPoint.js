let express = require('express');
let router = express.Router();
let db = require('./../DataLayer/dbManager.js');
let activityPointController = require('../Models/ActivityPointModel');

router.get('/:id?', (req, res) => {
    const id = db.escape(req.params.id);
    if (req.params.id) {
        activityPointController.getActivityPoint(id, function(err, result) {
            // Server err
            if (err) {
                res.status(500);
                return res.json({ "success": false, status: 500, "message": "could not retrieve data" });
            }
            // 404 not Found
            if (!result.length) {
                res.status(200);
                return res.json({ "success": true, status: 200, "message": "No data", "data": result });
            }

            res.status(200).json({ "success": true, status: 200, "message": "", "data": result });
        });
    } else {
        activityPointController.getActivityPoints(function(err, result) {
            //server err
            if (err) {
                res.status(500);
                return res.json({ "success": false, status: 500, "message": result });
            }
            // 404 not Found
            if (!result.length) {
                res.status(200);
                return res.json({ "success": true, status: 200, "message": "No data", "data": result });
            }
            res.status(200).json({ "success": true, status: 200, "message": "", "data": result });
        });
    }
});


router.post('/', function(req, res) {
    activityPointController.addActivityPoint(req.body, function(err, result) {
        if (err) {
            db.on('error', (dbErr) => {
                console.log('[mysql error]', dbErr);
            });
            console.log(err);
            return res.json({ "success": false, status: 500, "message": "could not retrieve data" });
        }
        res.status(200).json({ "success": true, status: 200, "message": "", "data": result });
    });
});

router.delete('/:id', function(req, res) {
    activityPointController.deleteActivityPoint(db.escape(req.params.id), function(err, result) {
        if (err) {
            db.on('error', (dbErr) => {
                console.log('[mysql error]', dbErr);
            });
            return res.json({ "success": false, status: 500, "message": "could not retrieve data" });
            console.log(err);
        }

        res.status(200).json({ "success": true, status: 200, "message": "", "data": result });
    });
});

router.put('/:id', function(req, res) {
    activityPointController.updateActivityPoint(db.escape(req.params.id), req.body, function(err, result) {
        if (err) {
            db.on('error', (dbErr) => {
                console.log('[mysql error]', dbErr);
            });
            console.log(err);
            return res.json({ "success": false, status: 500, "message": "could not retrieve data" });
        }

        res.status(200).json({ "success": true, status: 200, "message": "", "data": result });
    });
});

module.exports = router;