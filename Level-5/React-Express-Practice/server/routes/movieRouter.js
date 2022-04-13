
const express = require("express")
const movieRouter = express.Router()
const {v4: uuidv4} = require("uuid")

const movies = [
    {title: "Rambo", genre: "action", _id: uuidv4()},
    {title: "Dumb and Dumber", genre: "comedy", _id: uuidv4()},
    {title: "Good Will Hunting", genre: "drama", _id: uuidv4()}
]

movieRouter.get("/", (req,res) => {
    res.send(movies)
})

movieRouter.post("/", (req,res) => {
    const newMovie = req.body
    newMovie._id = uuidv4()
    movies.push(newMovie)
    res.send(`Successfully added ${newMovie.title} to the database`)
})







module.exports = movieRouter