const express = require('express');
const router = express.Router();
const db = require('../DataLayer/dbManager');
const activityControl = require('../Models/ActivityModel');

//Get all Activities
router.get('/', (req, res) => {
    activityControl.getActivities(function(err, result) {
        // Server err
        if (err) {
            res.status(500);
            return res.json({ "success": false, status: 500, "message": "could not retrieve data" });
        }
        // 404 not Found
        if (!result.length) {
            res.status(404);
            return res.json({ "success": false, status: 404, "message": "could not retrieve data" });
        }
        res.status(200).json({ "success": true, status: 200, "message": "", "data": result });
    });
});



router.get('/:id', (req, res) => {
    const id = db.escape(req.params.id);
    if (id) {
        activityControl.getActivity(id, function(err, result) {
            // Server err
            if (err) {
                res.status(500);
                return res.json({ "success": false, status: 500, "message": "could not retrieve data" });
            }
            // 404 not Found
            if (!result.length) {
                res.status(404);
                return res.json({ "success": false, status: 404, "message": "could not retrieve data" });
            }
            res.status(200).json({ "success": true, status: 200, "message": "", "data": result });
        });
    }
});

router.post('/', function(req, res) {
    activityControl.addActivity(req.body, function(err, result) {
        if (err) {
            db.on('error', (dbErr) => {
                console.log('[mysql error]', dbErr);
            });
            res.status(500);
            return res.json({ "success": false, status: 500, "message": "could not retrieve data" });
        }

        res.status(200).json({ "success": true, status: 200, "message": "", "data": result });
    });
});

router.delete('/:id', function(req, res) {
    activityControl.deleteActivity(db.escape(req.params.id), function(err, result) {
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
    activityControl.UpdateActivity(db.escape(req.params.id), req.body, function(err, result) {
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