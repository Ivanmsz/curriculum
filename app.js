const express = require("express");
const app = express();
app.get("/:universalURL", function (req, res) {
    res.sendFile(path.join(__dirname, '/index.html'));
});
app.listen(3000, function () {
    console.log("Server is running on localhost3000");
});
