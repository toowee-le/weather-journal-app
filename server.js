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

app.post('/addEntry', (req, res) => {
    console.log(req.body);
})

const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`server is running on localhost: ${port}`));