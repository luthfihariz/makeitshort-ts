import 'dotenv/config';
import express from 'express';
import userRouter from './modules/user/route'
import urlShortenerRouter from './modules/urlshortener/route'
import config from './config'
import bodyParser from 'body-parser';
import UserController from './modules/user/controller/user.controller';

const app = express();
app.use(bodyParser.json());

app.use('/api', userRouter);
app.use('/api', urlShortenerRouter)

module.exports = app.listen(config.port);