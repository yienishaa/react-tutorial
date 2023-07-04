//starting point of server

import express from 'express';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import cors from 'cors';

//all files on routes/posts.js is mapped to variable postRoutes
import postRoutes from './routes/posts.js';

const app = express();



app.use(bodyParser.json({limit: "30mb:", extended: true}))
app.use(bodyParser.urlencoded({limit: "30mb:", extended: true}))
app.use(cors());

//add a prefix of /posts for all the urls of postRoutes
app.use('/posts', postRoutes);

//connecting the DB
const CONNECTION_URL = 'mongodb+srv://<username>:<password>@cluster0.nxtldzk.mongodb.net/';
const PORT = process.env.PORT || 5000;

mongoose.connect(CONNECTION_URL, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => app.listen(PORT, () => console.log(`Server Running on Port: ${PORT}`)))
  .catch((error) => console.log(`${error} did not connect`));


//mongoose.set('useFindAndModify', false);
