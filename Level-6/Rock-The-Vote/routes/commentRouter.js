const express = require("express")
const commentRouter = express.Router()
const Comment = require("../models/comment.js")

commentRouter.get("/", (req, res, next) => {
    Comment.find((err, comments) => {
        if(err){
            res.status(500)
            return next(err)
        }
        console.log(comments)
        return res.status(200). send(comments)
    })
})
commentRouter.post("/:aircraftId", (req, res, next) => {
    console.log(req)
    req.body.aircraft = req.params.aircraftId,
    req.body.user = req.auth._id
    const newComment = new Comment(req.body)
    newComment.save((err, savedComment) => {
        if(err){
            res.status(500)
            return next(err)
        }
        return res.status(201).send(savedComment)
    })
})




module.exports = commentRouter