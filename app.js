const express = require("express");
const app = express();
//The app cannot be on "/" since the server requires any node app to run on "/anything"
//so instead of app.get "/" we use "/main"
app.get("/main/:message?", function (req, res) {
    res.sendFile(__dirname + "/index.html", {message:req.message});
});

app.get("/testJson",function(req,res){
    res.json({
        number: 1
    });
});

//If there's no match it redirects to /main
app.all('*', function(req, res) {
    res.redirect('/main/owo')
});

app.listen(3000, function () {
    console.log("Server is running on localhost3000");
});