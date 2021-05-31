
// exports.getPosts = (req, res) => {
//     res.send("hello hihbhbjhbjhbjbjbiihihihih");
// };

const Post = require("../models/post");


exports.getPosts = (req, res) => {
    const post = Post.find().select("_id title body")
        .then(posts => {
            res.json({ posts: posts });
        })
        .catch(err => console.log(err));

};


exports.createPost = (req, res) => {
    const post = new Post(req.body)
    // console.log("CRETING POST: ", req.body);

    // post.save((err, result)=>{
    //     if (err){
    //         return res.status(400).json({
    //             error: err
    //         });
    //     }
    //     res.status(200).json({
    //         post: result
    //     });
    // });


    post.save().then(result => {
        res.json({
            post: result
        });
    });
};