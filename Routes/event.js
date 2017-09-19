const express = require('express');
const router = express.Router();
const db = require('./../DataLayer/dbManager.js');
const eventControl = require('../Models/eventsModel');
const activityControl = require('../Models/ActivityModel');


// get list of Events
router.get('/:id?', (req, res) => {
    const id = db.escape(req.params.id);
    if (req.params.id) {
        eventControl.getEvent(id, function(err, result) {
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
    } else {
        eventControl.getEvents(function(err, result) {
            //server err
            if (err) {
                res.status(500);
                return res.json({ "success": false, status: 500, "message": result });
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

router.get('/:id/activities', (req, res) => {
    eventControl.ActivitiesEvent(db.escape(req.params.id), function(err, result) {
        // Server err
        if (err) {
            res.status(500);
            return res.json({ errors: ['could not retrieve data', err] });
        }
        // 404 not Found
        if (!result.length) {
            res.status(404);
            return res.json({ errors: ['Event not found', err] })
        }

        var j = JSON.stringify(result);
        console.log(j[2]);

        res.status(200).json({ "success": true, status: 200, "message": "", "data": result });
    });
});

router.get('/:id/speakers', (req, res) => {
    eventControl.SpeakersEvent(db.escape(req.params.id), function(err, result) {
        // Server err
        if (err) {
            res.status(500);
            return res.json({ errors: ['could not retrieve data', err] });
        }
        // 404 not Found
        if (!result.length) {
            res.status(404);
            return res.json({ errors: ['Event not found', err] })
        }
        res.status(200).json({ "success": true, status: 200, "message": "", "data": result });
    });
});
router.post('/', function(req, res) {
    eventControl.addEvent(req.body, function(err, result) {
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
    eventControl.deleteEvent(db.escape(req.params.id), function(err, result) {
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
    eventControl.UpdateEvent(db.escape(req.params.id), req.body, function(err, result) {
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