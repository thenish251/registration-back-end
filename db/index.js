const mongoose = require('mongoose');

const connectDB = async () => {
    mongoose.connect('mongodb://127.0.0.1:27017/register')
    .then(() => {
      console.log('Database connected successfully');
    })
    .catch((error) => {
      console.error('Error connecting to the database:', error.message);
    });
  
};

module.exports = connectDB;
