require("dotenv").config();

const cors = require('cors');

const port = process.env.PORT;
const connectDb = require('./database/db-con')
const express = require("express");
const app = express();

const adminRouter = require('./routes/Admin')
const path = require('path');
app.use(express.urlencoded({ extended: true }))
app.use('/uploads', express.static(path.join(__dirname, '/uploads')))

app.use(cors());
app.use(express.json());
app.use('/admin',adminRouter)

connectDb.then(() => {
  app.listen(port, () => {
    console.log("server start ", port)
  })
})