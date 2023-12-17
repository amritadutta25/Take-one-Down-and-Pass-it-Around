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

//Route to "/:number_of_bottles"
app.get("/:number_of_bottles", (req, res) => {

    // getting the number of bottles on the wall from URL param
    const bottleNum = req.params.number_of_bottles

    // number of bottles left after 1 bottle is taken down
    const oneLessBottle = bottleNum - 1

    // case when bottles are left to be taken down
    if (Number(bottleNum) !== 0) { // Number() converts bottleNum from string to int type, since URL params are of string type
        res.send(`<h1>${bottleNum} Bottles of beer on the wall</h1>
                 <a href="./${oneLessBottle}">take one down, pass it around</a>`)
    }
    // case when 0 bottles left to be taken down, we start over
    else {
        res.send(`<h1>${bottleNum} Bottles of beer on the wall</h1>
        <a href="./">Start over</a>`)
    }
})


// app listener
app.listen(3000, () => {console.log("Server listening on port 3000")})