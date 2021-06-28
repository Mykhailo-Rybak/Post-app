import express from 'express'
import bodyParser from 'body-parser'
import mongoose from 'mongoose'
import dotenv from 'dotenv'
import cors from 'cors'

import postRoutes from './routes/posts.js'

const app = express();
dotenv.config()

app.use(cors());
app.use(bodyParser.json({ limit: "30mb", extended: true}));
app.use(bodyParser.urlencoded({ limit: "30mb", extended: true}));

app.use('/posts', postRoutes);



const PORT = process.env.PORT|| 5000;

mongoose.connect(process.env.DB_URL, {useUnifiedTopology: true, useNewUrlParser: true})
    .then(() => app.listen(PORT, () => console.log(`Server start on port: ${PORT}`)))
    .catch((e) => console.log(`${e} did not connect`))

mongoose.set('useFindAndModify', false)