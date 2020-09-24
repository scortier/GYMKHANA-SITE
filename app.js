var express = require("express");
var app = express();
var mongoose = require("mongoose");
var bodyParser = require("body-parser");
var methodOverride = require("method-override");

// var Event = require("./models/event");

app.use(express.static("public"));
app.use(
    bodyParser.urlencoded({
        extended: true,
    })
);
app.use(methodOverride("_method"));

//Default Routing
app.get("/", function(req, res) {
    res.redirect("/index");
});

//Home page
app.get("/index", function(req, res) {
    res.render("index.ejs");
});

//Fest Page
app.get("/fest", function(req, res) {
    res.render("FEST.ejs");
});

//Activities Page
app.get("/activities", function(req, res) {
    res.render("activities.ejs");
});

//Campus Life Page
app.get("/campus", function(req, res) {
    res.render("Campus_Life.ejs");
});

//Members Page
app.get("/members", function(req, res) {
    res.render("Current_Members(2019).ejs");
});

//Events Page
app.get("/events", function(req, res) {
    res.render("events2.ejs");
});

//Oldmembers Page
app.get("/oldmembers", function(req, res) {
    res.render("oldmembers.ejs");
});

//Oldmembers2 Page
app.get("/oldmembers2", function(req, res) {
    res.render("oldmembers2.ejs");
});

//Oldmembers3 Page
app.get("/oldmembers3", function(req, res) {
    res.render("oldmembers3.ejs");
});

//Societies Page
app.get("/societies", function(req, res) {
    res.render("societies.ejs");
});

//########################################################

app.listen(process.env.PORT || 3000, function() {
    console.log("SERVER STARTED!!");
});