const express = require('express');

const app = express();

app.use("/users", (req, res, next) => {
    console.log('Second Middleware');
    res.send('<h1>The Middleware that controls just / </h1>');
});

app.use("/", (req, res, next) => {
    console.log('<h1>The Middleware that controls just / </h1>');
});

app.listen(3000);

