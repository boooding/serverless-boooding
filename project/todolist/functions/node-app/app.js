const express = require('express');

const app = new express();

app.use(express.json());
app.use(express.urlencoded({
    extended: false
}))

/**
 * Routers:
 */
const indexRouter = require('./router/index');
const todoRouter = require('./router/todo')

app.use('/', indexRouter);
app.use('/todo', todoRouter)

module.exports = app;