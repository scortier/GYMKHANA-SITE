var express = require("express");
var app = express();
var mongoose = require("mongoose");
var bodyParser = require("body-parser");
var methodOverride = require("method-override");
const {
    render
} = require("ejs");

require('dotenv').config()
app.use(express.static("public"));
app.use(
    bodyParser.urlencoded({
        extended: true,
    })
);
app.use(bodyParser.json());
app.use(methodOverride("_method"));

const connectDB = async() => {
    // console.log(process.env.DB);
    await mongoose.connect(process.env.DB, {
        useUnifiedTopology: true,
        useNewUrlParser: true
    });
    console.log("database connected!");
}

connectDB();

var eventSchema = new mongoose.Schema({
    heading: String,
    details: String,
    postedBy: String,
    category: String,
    links: String,
    deadline: {
        type: Date,
        default: Date.now
    },
    postedOn: {
        type: Date,
        default: Date.now
    }
});

//Create Mongoose Model
var Event = mongoose.model("Event", eventSchema);

//adminForm 
app.get("/eventform/:username/:password", function(req, res) {
    if (req.params.username === process.env.USER && req.params.password === process.env.PASS) {
        res.render("adminForm.ejs");
    } else {
        res.redirect("/");
        console.log("Inavlid username and password");
    }

})

app.post("/adminform", function(req, res) {
    var newEvent = new Event(req.body);
    newEvent.save();
    // console.log(req.body);
    res.redirect("/events");
})

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

// Events Page
app.get("/events", function(req, res) {
    Event.find({}, null, {
        sort: {
            postedOn: -1
        }
    }, function(err, allEvents) {
        if (err) {
            console.log(err);
        } else {
            res.render("events2.ejs", {
                events: allEvents
            });
        }
    })
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

//Event Details page
let documentId;
app.get("/eventdetail/:id", function(req, res) {
    documentId = req.params.id;
    res.redirect("/eventdetail")
})
app.get("/eventdetail", function(req, res) {
    Event.findOne({
        _id: documentId
    }, (err, event) => {
        if (err) {
            console.log(err);
        } else {
            res.render("eventDetail.ejs", {
                event: event
            })
        }
    })
})

//########################################################

app.listen(process.env.PORT || 3000, function() {
    console.log("SERVER STARTED!!");
});