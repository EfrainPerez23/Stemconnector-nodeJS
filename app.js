const express = require('express');
const app = express();
const cors = require('cors');
const db = require('./DataLayer/dbManager');

const bodyParser = require('body-parser');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cors());

const port = process.env.port || 3000;

let eventController = require('./Routes/Event/event');
let initiativeController = require('./Routes/initiative');
let activityController = require('./Routes/Activity');

db.connect((err) => {
    if (err) {
        console.log(err);
    }
    console.log('MySQL connected');
});



app.use('/event', eventController);
app.use('/initiative', initiativeController);
app.use('/activity', activityController);

app.use((req, res, next) => {
    res.status(404).send({ "success": false, "status": 404, "message": 'sorry cant find that!', "data": {} });
});

app.listen(port, () => {
    console.log('Server started on port ' + port);
});

module.exports = app;