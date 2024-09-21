const mongoose = require('mongoose');
require('dotenv').config();

// const mongoURL = 'mongodb://localhost:27017/hotels'
const mongoURL = process.env.DB_URL;

mongoose.connect(mongoURL);
const db = mongoose.connection;
db.on('connected', () => {
  console.log('connected to mongoDB server');
});
db.on('error', (err) => {
  console.log('error occured' + err);
});
db.on('disconnected', () => {
  console.log('mongoDB server disconnected ');
});

module.exports = db;
