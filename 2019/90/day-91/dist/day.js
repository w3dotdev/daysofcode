"use strict";
exports.__esModule = true;
// TypeScript is a superset of JavaScript that compiles to clean JavaScript output.
// https://www.typescriptlang.org/
// npm install tslint typescript -g
// tsc --init
// tslint --init
// npm run build
// npm start
var express = require("express");
var bodyParser = require("body-parser");
var users = require("./users");
var app = express();
var PORT = 3000;
app.use(bodyParser.json());
app.get("/", function (req, res) {
    res.status(200).send({ message: 'TypeScript' });
});
// GET ALL
app.get('/users', function (req, res) {
    res.status(200).send(users.usersList);
});
// GET ID
app.get('/users/:userId', function (req, res) {
    var userId = parseInt(req.params.userId);
    res.status(200).send(users.usersList.find(function (user) { return user.id === userId; }));
});
// CREATE ID
app.post('/users', function (req, res) {
    var newUser = req.body;
    users.usersList.push(users.createNewUserFromData(newUser));
    res.status(200).send(users.usersList);
});
app.listen(PORT);
console.log("http://localhost:" + PORT);
