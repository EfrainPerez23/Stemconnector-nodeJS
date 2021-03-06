const express = require('express');
const app = express();
const cors = require('cors');
const db = require('./DataLayer/dbManager');

const bodyParser = require('body-parser');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cors());

const port = process.env.port || 3000;

let eventController = require('./Routes/event');
let initiativeController = require('./Routes/initiative');
let activityController = require('./Routes/Activity');
let speakerController = require('./Routes/speaker');
let internController = require('./Routes/Intern');
let eventPhonesController = require('./Routes/EventPhone');
let activityPointController = require('./Routes/ActivityPoint');
let companyController = require('./Routes/Company');
let contactController = require('./Routes/Contact');
let adminController = require('./Routes/Admin');

db.connect((err) => {
    if (err) {
        console.log(err);
    }
    console.log('MySQL connected');
});



app.use('/events', eventController);
app.use('/initiatives', initiativeController);
app.use('/activity', activityController);
app.use('/speakers', speakerController);
app.use('/interns', internController);
app.use('/eventPhones', eventPhonesController);
app.use('/activityPoint', activityPointController);
app.use('/company', companyController);
app.use('/contact', contactController);
app.use('/admin', adminController);

app.use((req, res, next) => {
    res.status(404).send({ "success": false, "status": 404, "message": 'sorry cant find that!', "data": {} });
});

app.listen(port, () => {
    console.log('Server started on port ' + port);
});

module.exports = app;