const express = require('express')
const app = express();
const cors = require('cors');
const { register } = require('./controllers/register');
app.use(cors()); // for corss origin request
app.use(express.json()); // for reading body in request
app.get('/test', (req, res) => {
    res.send('hello bc');
})
app.post('/register', register);
app.listen(4000);