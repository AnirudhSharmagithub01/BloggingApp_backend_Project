// import model we needed
const Post = require('../model/post');
const Comment = require('../model/comment');

exports.createComment = async(req,res) =>{
    
    try {
        //fetch params from body
        const {post,user,body} = req.body;

        //create an comment object
        const comment = new Comment({
            post,user,body
        });

        //save the new comment into the database
        const saveComments = await comment.save();

        //update the comment of the post by id and add to the post database
        const updateComment = await Post.findByIdAndUpdate(post,{$push:{comment:saveComments._id}}, {new:true})
                            .populate("comment")  // populate the comment array with comment documents
                            .exec();

        res.json({
            post:updateComment,
        })
        
    } catch (error) {

        return res.status(500).json(
            {
                success : false,
                error : error.message,
            }
        );
        
    }
}