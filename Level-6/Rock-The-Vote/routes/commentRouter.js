const express = require("express")
const commentRouter = express.Router()
const Comment = require("../models/comment.js")

// Get all aircraft comments by aircraft ID
commentRouter.get('/:aircraftId/comments', (req, res, next) => {
    Comment.find({ aircraft: req.params.aircraftId }, (err, comments) => {
      if (err) {
        res.status(500);
        return next(err);
      }
      return res.status(200).send(comments);
    });
  });

  // Add comment to aircraft by aircraft ID
commentRouter.post('/:aircraftId/comments', (req, res, next) => {
    req.body.user = req.auth._id; //find user posting comment and make that equal to the user property in comment schema
    req.body.aircraft = req.params.aircraftId;
    const newComment = new Comment(req.body);
    newComment.save((err, savedComment) => {
      if (err) {
        res.status(500);
        return next(err);
      }
      return res.status(201).send(savedComment);
    });
  });
//Delete comment by aircraft and only by the creator of the comment
  commentRouter.delete('/:aircraftId/comments/:commentId', (req, res, next) => {
    Comment.findOneAndRemove(
        { _id: req.params.commentId, user: req.auth._id },
        (err, deletedComment) => {
        if (err) {
          res.status(500);
          return next(err);
        }
        return res
          .status(200)
          .send(`${deletedComment} deleted successfully`);
      }
    );
  });

  
  
  
  
  module.exports = commentRouter




//   old post request
  // commentRouter.post("/:aircraftId/comments", (req, res, next) => {
  //     console.log(req)
  //     req.body.aircraft = req.params.aircraftId,
  //     req.body.user = req.auth._id
  //     const newComment = new Comment(req.body)
  //     newComment.save((err, savedComment) => {
  //         if(err){
  //             res.status(500)
  //             return next(err)
  //         }
  //         return res.status(201).send(savedComment)
  //     })
  // })