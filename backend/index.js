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
const { upload } = require('./controllers/upload');
const multer = require('multer');
const { uploadfile } = require('./controllers/uploadfile');

app.use(cors({
    origin: 'http://localhost:5173', // Allow requests from this origin
    credentials: true // Allow credentials
})); // for corss origin request
app.use(express.json()); // for reading body in request
app.use(cookieParser());// for reading cookie
app.use('/uploads', express.static(__dirname + '/uploads'));
app.get('/test', (req, res) => {
    res.send('hello bc');
})
app.post('/register', register);
app.post('/login', login);
app.get('/profile', authenticate, profile);
app.post('/logout', (req, res) => {
    res.cookie('token', '').json(true);
});
app.post('/upload-by-link', upload);
const photosMiddleware = multer({ dest: 'uploads' });
app.post('/upload', photosMiddleware.array('photos', 100), uploadfile);

app.listen(4000);

