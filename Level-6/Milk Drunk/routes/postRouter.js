const express = require("express")
const postRouter = express.Router()
const Post = require("../models/post.js")
const user = require("../models/user.js")
const User = require("../models/user.js")

// get all Posts
postRouter.get("/", (req,res,next) => {
    Post.find((err, posts) => {
        if(err){
            res.status(500)
            return next(err)
        }
        return res.status(200).send(posts)
    })
})

// get post by userId
postRouter.get("/user", (req, res, next) => {
    Post.find({user: req.auth._id}).
    populate("user", "username").
    exec((err, posts)=> {
        if(err){
            res.status(500)
            return next(err)
        }
        return res.status(200).send(posts)
    })
})

//get posts by user
// postRouter.get('/user', (req, res, next) => {
// Post.find( {user: req.auth._id}).populate("user", "username").exec( (err, posts) => {
//     if(err){           
//             res.status(500)
//             return next(err)
//        }   
//       return res.status(200).send(posts)
// })
// });

// get post by postId
// postRouter.get("/:postId", (req, res, next) => {
//     Post.findById(req.params.postId, (err, post) => {
//         if(err){
//             res.status(500)
//             return next(err)
//         } else if(!post){
//             res.status(404)
//             return next(new Error("No post found"));
//         }
//         return res.send(post)
//     })
// })

                                                                // , "-password"
postRouter.get("/:postId", (req, res, next) => {
    Post.findById(req.params.postId).
    populate("user", 'username').
    exec( (err, post) => {
        if(err){           
                res.status(500)
                return next(err)
           }   
          return res.status(200).send(post)
});
});
//INTERESTING WAY WITH TRY/CATCH BELOW
// try {
//     let data = Post.findById(req.params.postId).populate({
//       path: 'user',
//       select:
//         'username',
//     });
//     res.status(200).send(data);
//   } catch (err) {
//     console.log(err);
//     res.status(500).json({ success: false, msg: err.message });
//   }

// add a new post
postRouter.post("/", (req, res, next) => {
    req.body.user = req.auth._id
    const post = new Post(req.body);
    console.log(req)
    post.save((err, newPost) => {
        if(err){
            res.status(500)
            return next(err)
        }
        return res.status(200).send(newPost);
    });
});



// update an aircraft
postRouter.put("/:postId", (req, res, next) => {
    Post.findOneAndUpdate(
        {_id: req.params.postId, user: req.auth._id},
        req.body,
        {new: true},
        (err, updatedPost) => {
            if(err){
                res.status(500);
                return next(err);
            }
            return res.status(200).send(updatedPost)
        }
    );
});

// delete an aircraft
postRouter.delete("/:postId", (req, res, next) => {
    Post.findOneAndDelete({_id: req.params.postId, user: req.auth._id}, (err, deletedPost) => {
        if(err){
            res.status(500)
            return next(err)
        }
        return res.status(200).send(`Successfully deleted the ${deletedPost}`)
    })
})
//upvotes request
//VScode DEBUG
//place where the code stops executing(javascript node engine stops/bookmark)
//When it breaks I have access to all variables variables and scopes(all inspectable)
//WATCH SECTION
//stepover- evaluate fine tune expression
//updatedAircraft.toObject().upVotes[0].toString()
postRouter.put("/:postId/upvote", (req, res, next) => {
    Post.findOneAndUpdate(
        {_id: req.params.postId},
        { $pull: {downVotes: req.auth._id}, $addToSet: {upVotes: req.auth._id}},
        {new: true},
        (err, updatedPost) => {
            if(err){
                res.status(500)
                return next(err)
            }
            return res.status(200).send(updatedPost)
        }
    );
});

//downvote request
postRouter.put("/:postId/downvote", (req, res, next) => {
    Post.findOneAndUpdate(
        {_id: req.params.postId},
        { $pull: {upVotes: req.auth._id}, $addToSet: {downVotes: req.auth._id}},
        {new: true},
        (err, updatedPost) => {
            if(err){
                res.status(500)
                return next(err)
            }
            return res.status(200).send(updatedPost)
        }
    );
});

//delete vote
postRouter.put("/:postId/retract", (req, res, next) => {
    Post.findOneAndUpdate(
        {_id: req.params.postId},
        { $pull: {upVotes: req.auth._id, downVotes: req.auth._id}},
        {new: true},
        (err, updatedPost) => {
            if(err){
                res.status(500)
                return next(err)
            }
            return res.status(200).send(updatedPost)
        }
    );
});

// add to set, 2 and 1 fuction create http request.
//put request updating model






module.exports = postRouter