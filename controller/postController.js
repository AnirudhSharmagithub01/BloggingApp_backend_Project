// import model
const Post = require('../model/post');


exports.createPost = async(req,res) =>{

    try {
        
        //fetch entiy from body
        const {title,user,body} = req.body;

        //create an object 
        const post = new Post({
            title,user,body
        })

        // save the post in database
        const savePost = await post.save();

        res.json({
            post : savePost,
        })
    } catch (error) {
        
        return res.status(500).json({
            success : false,
            error: error.message,
        });
    }
}

exports.getAllPosts = async(req,res) =>{
    try {

        const posts = await Post.find().populate("like").populate("comment").exec();

        res.json({
            posts,
        })
        
    } catch (err) {
        
        return res.status(500).json({
            success : false,
            error:err.message,
        })
    }
}