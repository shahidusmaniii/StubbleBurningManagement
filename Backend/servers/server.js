const express = require('express');
const connectDB = require('../config/db');
const cookieParser = require('cookie-parser');
const cors = require('cors');
const router = require('../api/auth');
const app = express();
connectDB();

app.use(cookieParser());   
app.use(express.json()); 
app.use(cors());
  
app.use('/',router);

const SERVER_PORT =  8000 || process.env.SERVER_PORT;
app.listen(SERVER_PORT,() => console.log(`server started on port ${SERVER_PORT}`));