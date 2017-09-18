const express = require('express');
const router = express.Router();
const db = require('../DataLayer/dbManager');
const activityControl = require('../Models/ActivityModel');

//Get all Activities
router.get('/', (req, res) => {
    activityControl.getactivities(function(err, result) {
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
        res.status(200).json(result);
    });
});

router.get('/:id?', (req, res) => {
    const id = db.escape(req.params.id);
    if (id) {
        activityControl.getactivity(id, function(err, result) {
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
            res.json(result);
        });
    }
});

router.post('/add', function(req, res) {
    activityControl.addActivity(req.body, function(err, result) {
        if (err) {
            db.on('error', (dbErr) => {
                console.log('[mysql error]', dbErr);
            });
            res.status(500);
            return res.json({ errors: ['could not retrieve data', err] });
        }

        res.json(req.body);
    });
});

router.delete('/delete/:id', function(req, res) {
    activityControl.deleteActivity(db.escape(req.params.id), function(err, result) {
        if (err) {
            db.on('error', (dbErr) => {
                console.log('[mysql error]', dbErr);
            });
            return res.status(500).json({ errors: ['could not retrieve data', err] });
            console.log(err);
        }
        res.json(result);
    });
});

router.put('/update/:id', function(req, res) {
    activityControl.UpdateActivity(db.escape(req.params.id), req.body, function(err, result) {
        if (err) {
            db.on('error', (dbErr) => {
                console.log('[mysql error]', dbErr);
            });
            console.log(err);
            return res.status(500).json({ errors: ['could not retrieve data', err] });
        }

        res.json(result);
    });
});

module.exports = router;