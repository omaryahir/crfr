let express = require ("express");
let app = express ();

app.get ("/", (req, res) => {
    res.send("This node server is working !");
});

app.listen (8181);
