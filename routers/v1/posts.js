import express from "express"
import Post from "../../models/Post.js"
import authenticationToken from "../../services/auth.js"
const router = express.Router();

router.get("/", authenticationToken, async (req, res) => {
    try {
       const posts = await Post.find();
       const filterdPosts = posts.filter(post => post.user === req.user.name)
       res.json(filterdPosts)
    } catch (error) {
        res.json({message: error})
    }
})

router.get("/:postId", async (req, res) => {
    try {
       const posts = await Post.findById(req.params.postId);
       res.json(posts)
    } catch (error) {
        res.json({message: error})
    }
})

router.delete("/:postId", async (req, res) => {
    try {
        const removedPost = await Post.deleteOne({_id: req.params.postId});
        res.json(removedPost)
     } catch (error) {
         res.json({message: error})
     }
})


router.put("/:postId", async (req, res) => {
    const filter = { _id: req.params.postId };
    // create a document that sets the title of the post
    const updateDoc = {
        $set: {
            title: req.body.title,
            description: req.body.description,
          },
      };

    try {
        const updatedPost = await Post.updateOne(filter, updateDoc);
        res.json(updatedPost)
     } catch (error) {
         res.json({message: error})
     }
})


router.post("/", async (req, res) => {
    const newPost = new Post({
        title: req.body.title,
        description: req.body.description,
    })

   try {
      const savePost = await newPost.save();
      res.status(201).json(savePost)
   } catch (error) {
       res.json({message: error})
   }
});

export default router;
