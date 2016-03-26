var express = require("express");
var app = express();
var path = require("path");
var bodyparser = require("body-parser");

app.set("port", (process.env.PORT || 5000));

app.use(bodyparser.json());
app.use(bodyparser.urlencoded({extended: true}));


//DB stuff

app.get("/pets", function(req,res){
    res.send("Yupper do");
});

app.post("/pets", function(req,res){
    console.log(req.body);
    res.send("Fo sho");
});


app.get("/*", function(req, res){
    var file = req.params[0] || "/views/index.html";
    res.sendFile(path.join(__dirname, "/public/", file));
});

app.listen(app.get("port"), function(){
  console.log("listening on ", app.get("port"));
});

module.exports = app;
