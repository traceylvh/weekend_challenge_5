var express = require("express");
var app = express();
var path = require("path");
var bodyparser = require("body-parser");
var mongoose = require("mongoose");
var Schema = mongoose.Schema;

app.set("port", (process.env.PORT || 3000));

app.use(bodyparser.json());
app.use(bodyparser.urlencoded({extended: true}));

mongoose.connect('mongodb://localhost/pet_keeper');
mongoose.model("Pets", new Schema({"name" : String, "type" : String, "age" : Number, "picurl" : String}));
var Pet = mongoose.model("Pets");

app.get("/pets", function(req, res){
      Pet.find({}, function(err, data){
      if(err){
          console.log(err);
      }

      res.send(data);
    });
});

app.post("/pets", function(req,res){
    console.log(req.body);

    var addedPet = new Pet({"name" : req.body.name, "type" : req.body.type, "age" : req.body.age, "picurl" : req.body.picurl});
    addedPet.save(function(err, data){
        if(err){
          console.log(err);
        }

    res.send(data);
    });

});



app.delete("/pets/:id", function (req, res) {
    console.log(req.params.id);
    Pet.find({ _id: req.params.id }).remove( function(err, data) {
        if(err){
          console.log(err);
        }

        res.send(data);
    });
});


app.get("/*", function(req, res){
    var file = req.params[0] || "/views/index.html";
    res.sendFile(path.join(__dirname, "/public/", file));
});

app.listen(app.get("port"), function(){
  console.log("listening on ", app.get("port"));
});

module.exports = app;
