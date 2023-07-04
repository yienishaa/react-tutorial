import express from 'express';
import mongoose from 'mongoose';

//below gives access to real mongoose model
import PostMessage from '../models/postMessage.js';

const router = express.Router();


export const getPosts = async(req, res) => {
    try {
        //get all posts, it takes time so we need to wait and its async
        const postMessages = await PostMessage.find();

        res.status(200).json(postMessages);

    } catch (error) {
        //if we get an error
        //console.log(error);
        res.status(404).json({message: error.message });
    }
}

export const createPost = async(req, res) => {
    const post = req.body;

    const newPost = new PostMessage(post);

    try {
        await newPost.save();

        res.status(201).json(newPost);
    } catch (error) {
        res.status(409).json({message: error.message});
    }
}