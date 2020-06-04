const express = require('express');
const app = express();

/* Middleware */
const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Cors for cross origin allowance
const cors = require('cors');
app.use(cors());

// Initialise the main project folder
app.use(express.static('public'));

const projectData = [];

app.post('/addEntry', addEntry);

function addEntry(req, res) {
    newEntry = {
        city: req.body.city,
        country: req.body.country,
        temp: req.body.temp,
        weather: req.body.weather,
        description: req.body.description,
        icon: req.body.icon,
        mood: req.body.mood
    };

    projectData.push(newEntry);
    res.send(projectData);
    console.log(projectData);
};

const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`server is running on localhost: ${port}`));