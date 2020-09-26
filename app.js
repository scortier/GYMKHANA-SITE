var express = require("express");
var app = express();
var mongoose = require("mongoose");
var bodyParser = require("body-parser");
var methodOverride = require("method-override");


app.use(express.static("public"));
app.use(
    bodyParser.urlencoded({
        extended: true,
    })
);
app.use(bodyParser.json());
app.use(methodOverride("_method"));

const connectDB = async ()=>{
    await mongoose.connect('mongodb+srv://aditya2712:aditya2712@cluster0.budh1.mongodb.net/events?retryWrites=true&w=majority',{ 
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
    deadline: { type: Date, default: Date.now }
});

//Create Mongoose Model
var Event = mongoose.model("Event", eventSchema);

//adminForm 
app.get("/adminform",function(req,res){
    res.render("adminForm.ejs");
})

app.post("/adminform",function(req,res){
    var newEvent=new Event(req.body);
    newEvent.save();
    console.log(req.body);
    res.send("Event Created!!") ;
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
    Event.find({}, function(err, allEvents) {
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

//Post new event
// app.post("/events", function(req, res) {
//     var title = req.body.title;
//     var body = req.body.body;
//     var deadline = req.body.deadline;
//     var author = req.body.author;
//     var category = req.body.category;
//     var newEvent = {
//         title: title,
//         body: body,
//         deadline: deadline,
//         author: author,
//         category: category
//     };
//     console.log(newEvent);
//     //Create a new campground and save to DB
//     Event.create(newEvent, function(err, newlyCreated) {
//         if (err) {
//             console.log(err);
//         } else {
//             //redirect to campgrounds
//             res.redirect("/events");
//         }
//     })
// });

//########################################################

app.listen(process.env.PORT || 3000, function() {
    console.log("SERVER STARTED!!");
});