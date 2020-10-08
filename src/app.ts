import 'dotenv/config';
import express from 'express';
import userRouter from './module/user/route'
import urlShortenerRouter from './module/urlshortener/route'
import config from './config'
import bodyParser from 'body-parser';

const app = express();
app.use(bodyParser.json());

app.use('/api', userRouter);
app.use('/api', urlShortenerRouter)

module.exports = app.listen(config.port);