const express = require("express");
const router = express.Router();
const mongoose = require("mongoose");
const requiredLogin = require("../middleware/requiredLogin");
const Post = mongoose.model("Post")
const user = mongoose.model("User")

//all post
router.get("/allPost" , ( req , res) =>{
    Post.find()
    .populate( "postedBy" , "id name")
    .then( posts =>{
        res.json( posts)
    })
    .catch( err =>{
        console.log(err)
    }) 
})

//my post
router.get("/myPost" ,requiredLogin, ( req , res) =>{
    Post.find({ postedBy: req.user._id})
    .populate("postedBy ", "id name")
    .then( mypost =>{
        res.json({mypost})
    })
    .catch( err =>{
        console.log(err)
    })
})

router.post("/createPost" ,requiredLogin ,( req , res) =>{
  
    const {title , body} = req.body
    if(!title || !body){
        return res.status(422).json({ error:"Please enter all fields"})
    }
   
    req.user.password = undefined
    const post = new Post({
        title, 
        body,
        postedBy:req.user

    })
    // console.log("User" , req.user)
 
   
        post.save()
        .then(result =>{
            res.json({post:result})
        })
        .catch( err =>{
            console.log(err)
        })
})

module.exports = router;