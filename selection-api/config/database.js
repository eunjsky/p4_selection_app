const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/students',
  { useNewUrlParser: true }
);

// shortcut to mongoose.connection objec
const db = mongoose.connection;

db.on('connected', function () {
  console.log(`Connected to MongoDB at ${db.host}:${db.port}`);
});