const express = require('express');
const router = express.Router();
const db = require('../DataLayer/dbManager');
const iniControl = require('../Models/initiativeModel');
const sendBack = require('../sendback');


//Get all Initiatives
router.get('/', (req, res) => {
    iniControl.getInitiatives(function(err, result) {
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
});

router.get('/:id', (req, res) => {
    const id = db.escape(req.params.id);
    iniControl.getInitiative(id, function(err, result) {
        // Server err
        if (err) {
            res.status(500);
            return res.json({ "success": false, status: 500, "message": "could not retrieve data" });
        }
        if (!result.length) {
            res.status(200);
            return res.json({ "success": true, status: 200, "message": "No data", "data": result });
        }
        res.status(200).json({ "success": true, status: 200, "message": "", "data": result });
    });
});

router.post('/', function(req, res) {
    iniControl.addIni(req.body, function(err, result) {
        if (err) {
            db.on('error', (dbErr) => {
                console.log('[mysql error]', dbErr);
                return res.json({ "success": false, status: 500, "message": "could not retrieve data" });
            });
            return res.json({ "success": false, status: 404, "message": "could not retrieve data" });
            console.log(err);
        }
        res.json({ "success": true, status: 200, "message": "", "data": result });
    });
});


router.delete('/:id', function(req, res) {
    iniControl.deleteIni(db.escape(req.params.id), function(err, result) {
        if (err) {
            db.on('error', (dbErr) => {
                console.log('[mysql error]', dbErr);
            });
            return res.json({ "success": false, status: 500, "message": "could not retrieve data" });
            console.log(err);
        }
        // 404 not Found
        if (!result.length) {
            res.status(200);
            return res.json({ "success": true, status: 200, "message": "No data", "data": result });
        }

        res.json({ "success": true, status: 200, "message": "", "data": result });
    });
});

router.put('/:id', function(req, res) {
    iniControl.updateIni(db.escape(req.params.id), req.body, function(err, result) {
        if (err) {
            db.on('error', (dbErr) => {
                console.log('[mysql error]', dbErr);
            });
            console.log(err);
            return res.json({ "success": false, status: 500, "message": "could not retrieve data" });

        }
        // 404 not Found
        if (!result.length) {
            res.status(200);
            return res.json({ "success": false, status: 200, "message": "No data", "data": result });
        }
        res.json({ "success": true, status: 200, "message": "", "data": result });
    });
});

router.get('/:id/events', (req, res) => {
    iniControl.events(db.escape(req.params.id), function(err, result) {
        if (err) {
            db.on('error', (err) => {
                console.log("[mysql error]", err);
            });
            return res.json({ "success": false, status: 500, "message": "could not retrieve data" });
        }
        // 404 not Found
        if (!result.length) {
            res.status(200);
            return res.json({ "success": true, status: 200, "message": "No data", "data": result });
        }

        res.json({ "success": true, status: 200, "message": "", "data": result });
    });
});

module.exports = router;