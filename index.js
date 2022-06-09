// Turtle:
// - create one
// - read all
// - update one
// - delete one
const express = require('express');
const morgan = require('morgan');
const turtleRouter = require('./route/turtle-router')
const PORT = process.env.PORT || 3000; // if process.env.PORT is not undefined or null, it will be assigned to PORT
// otherwise, port 3000 is assigned instead

const app = express();

app.use(morgan('dev'));
app.use('/turtle', turtleRouter);

app.listen(PORT, () => console.log('Up and running'));


