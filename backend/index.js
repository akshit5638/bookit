const express = require('express')
const app = express();
const mongoose = require('mongoose');
require('dotenv').config();

mongoose.set('strictQuery', true);
mongoose.connect(process.env.MONGO_URL);
// console.log(process.env.MONGO_URL)
const cors = require('cors');
const { register } = require('./controllers/register');
const { login } = require('./controllers/login');
const { profile } = require('./controllers/profile')
const authenticate = require('./middlewares/authenticate');
const cookieParser = require('cookie-parser');

app.use(cors({
    origin: 'http://localhost:5173', // Allow requests from this origin
    credentials: true // Allow credentials
})); // for corss origin request
app.use(express.json()); // for reading body in request
app.use(cookieParser());// for reading cookie
app.get('/test', (req, res) => {
    res.send('hello bc');
})
app.post('/register', register);
app.post('/login', login);
app.get('/profile', authenticate, profile);
app.listen(4000);

