const express = require('express');
const router = express.Router();
const db = require('./../DataLayer/dbManager.js');
const speakerControl = require('../Models/SpeakerModel');

router.get('/lastId', (req, res) => {
    speakerControl.lastIdSpeaker(function(err, result) {
        // Server err
        if (err) {
            res.status(500);
            return res.json({ "success": false, status: 500, "message": "could not retrieve data" });
        }
        // 404 not Found`
        if (!result.length) {
            res.status(200);
            return res.json({ "success": true, status: 200, "message": "No data", "data": result });
        }

        return res.status(200).json({ "success": true, status: 200, "message": "", "data": result[0] });
    });
});
// get list of Events
router.get('/:id', (req, res) => {
    const id = db.escape(req.params.id);
    if (req.params.id) {
        speakerControl.getSpeaker(id, function(err, result) {
            // Server err
            if (err) {
                res.status(500);
                return res.json({ "success": false, status: 500, "message": "could not retrieve data" });
            }
            // 404 not Found`
            if (!result.length) {
                res.status(200);
                return res.json({ "success": true, status: 200, "message": "No data", "data": result });
            }

            res.status(200).json({ "success": true, status: 200, "message": "", "data": result });
        });
    }
});

router.get('/', (req, res) => {
    speakerControl.getSpeakers(function(err, result) {
        //server err
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
});

router.post('/', function(req, res) {
    speakerControl.addSpeaker(req.body, function(err, result) {
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

router.delete('/:id', function(req, res) {
    speakerControl.deleteSpeaker(db.escape(req.params.id), function(err, result) {
        if (err) {
            db.on('error', (dbErr) => {
                return res.json({ "success": false, status: 500, "message": "could not retrieve data" });
            });
            return res.json({ "success": false, status: 500, "message": "could not retrieve data" })
            console.log(err);
        }

        res.status(200).json({ "success": true, status: 200, "message": "", "data": result });
    });
});

router.put('/:id', function(req, res) {
    speakerControl.updateSpeaker(db.escape(req.params.id), req.body, function(err, result) {
        if (err) {
            db.on('error', (dbErr) => {
                return res.json({ "success": false, status: 500, "message": "could not retrieve data" });
            });
            console.log(err);
            return res.json({ "success": false, status: 500, "message": "Not Exist that Speaker to update" })
        }

        res.status(200).json({ "success": true, status: 200, "message": "", "data": result });
    });
});

router.post('/eventHasSpeaker', function(req, res) {
    speakerControl.addEvent_has_Speaker(req.body, function(err, result) {
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
router.delete('/eventHasSpeaker/:id', function(req, res) {
    speakerControl.deleteEvent_has_Speaker(db.escape(req.params.id), function(err, result) {
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