const express = require('express');
const app = express();
const path = require ('path')
const mongoose = require('mongoose');

mongoose
  .connect("mongodb://localhost:27017")
  .then(() => console.log('MongoDB connected successfully'))
  .catch(err => console.error('MongoDB connection error:', err));

const Student = require('./models/students');

// Middleware
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.set('view engine', 'ejs');

// get/login route
app.get("/login", (req, res) => {
  res.render('auth/login', {
    isLogin: true
  });
});

// post/login route
app.post("/login", (req, res) => {
  const data = req.body;
  if (data.email == "mominyusuf@gmail.com" && data.password == "yusuf@123") {
    res.send("Login successful");
  } else {
    res.send("Invalid email or password");
  }
});

// export the app so it can be used in server.js
module.exports = app;