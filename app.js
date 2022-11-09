const express = require("express");
const app = express();

const PORT = process.env.PORT || 3000;

if (process.env.NODE_ENV !== "production") {
    require("dotenv").config();
    console.log(process.env.PORT, PASSWORD, TOKEN) // remove this after you've confirmed it is working
}


app.get("/", function(req, res) {
    res.send("Hello World Express working...");
});

app.listen(PORT, () => {
    console.log(`Server lisening on port ${PORT}`);
});