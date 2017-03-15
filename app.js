var express = require("express");
var app = express();

app.use(express.static("static"));

app.get("/hello",function(req,res) {
	res.send("Hello World");
});

app.listen(2432,function(err) {
	console.log("Application started on port 2432");
});
