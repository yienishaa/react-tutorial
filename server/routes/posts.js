import express from 'express';

import { getPosts, createPost } from '../controllers/posts.js';

const router = express.Router();

//what is going to be shown when someone visits / path
/*router.get('/', (req, res) => {
    res.send('THIS WORKS');
});
*/
//above will make the files too long so it was moved to controllers/post.js

router.get('/', getPosts);
router.post('/', createPost);

export default router;