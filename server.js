// import express library
const express = require("express")

// create express app object
const app = express()

//****************** 
// ROUTES
//****************** 

//Route to root path "/"
app.get("/", (req, res) => {

    res.send(`<h1>99 Bottles of beer on the wall</h1>
             <a href="./98">take one down, pass it around</a>`)
})






// app listener
app.listen(3000, () => {console.log("Server listening on port 3000")})