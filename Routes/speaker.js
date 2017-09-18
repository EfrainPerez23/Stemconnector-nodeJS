const express = require('express');
const router = express.Router();
const db = require('./../DataLayer/dbManager.js');
const speakerControl = require('../Models/SpeakerModel');


// get list of Events
router.get('/:id?', (req, res) => {
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
                res.status(404);
                return res.json({ "success": false, status: 404, "message": "There is no Speaker" });
            }

            res.status(200).json({ "success": true, status: 200, "message": "", "data": result });
        });
    } else {
        speakerControl.getSpeakers(function(err, result) {
            //server err
            if (err) {
                res.status(500);
                return res.json({ "success": false, status: 500, "message": "could not retrieve data" });
            }
            // 404 not Found
            if (!result.length) {
                res.status(404);
                return res.json({ "success": false, status: 404, "message": "Theres is no Speakers" });
            }
            res.status(200).json({ "success": true, status: 200, "message": "", "data": result });
        });
    }
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

module.exports = router;