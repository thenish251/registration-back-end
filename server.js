const express = require('express');
const mongoose = require('mongoose')
const cors = require('cors')
const bodyParser = require('body-parser');
const userRoutes = require('./routes/userRoutes');
// const connectDB = require('./db');


const app = express();
const port = 8000;

app.use(bodyParser.json());

// Connect to MongoDB
mongoose.connect('mongodb://127.0.0.1:27017/register')
  .then(() => {
    console.log('Database connected successfully');
  })
  .catch((error) => {
    console.error('Error connecting to the database:', error.message);
  });

// connectDB();
app.use(cors());


app.use('/api/users',userRoutes);

app.listen(port,()=>{
    console.log(`server is running  http://localhost:${port}`)
})