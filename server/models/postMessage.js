import mongoose from 'mongoose';

//creating a schema
//{} this means a object is inside

const postSchema = mongoose.Schema({
    title: String,
    message: String,
    creator: String,
    tags: [String],
    selectedFile: String,
    likeCount: {
        type: Number,
        default: 0,
    },
    createdAt: {
        type: Date,
        default: new Date(),
    },
})

//above is the schema, now we convert to a model.

var PostMessage = mongoose.model('PostMessage', postSchema);

//Exporting a mongoose model from the postMessage file
export default PostMessage;