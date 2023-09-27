const Post = require('../model/post');
const Like = require('../model/like');

exports.clickLike = async(req,res) =>{

    try {

        //fetch data from body
        const {post,user} = req.body;
        
        //create an object
        const createLike = new Like({
            post,user,
        });

        //save the like in database
        const saveLike = await createLike.save();

        //update the like of the post in the actual database
        const updateLike = await Post.findByIdAndUpdate(post,{$push: {like:saveLike._id}} ,{new:true})
                            .populate('like')
                            .exec();

        
        res.json({
            updateLike,
        });
        
        
    } catch (error) {

        res.status(500).json({
            success:false,
            error:error.message,
        });
        
    }
}



exports.disLike = async(req,res) =>{
    
    try {

        //fetch post and Like ids from body
        const {post,like} = req.body;

        //remove the like from the post 
        const deleteLike = await Like.findByIdAndDelete({ post:post, _id:like});
        
        // update the like array in the database
        const updatePost  = await Post.findByIdAndUpdate(post,{$pull :{dislike:deleteLike._id}},{new:true});


        res.json({
            updatePost,
        });
        
    } catch (error) {

        res.status(500).json({
            success:false,
            error:error.message,
        });
        
    }
}
