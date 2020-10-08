import UserController from '../../user/controller/user.controller';
import {Router} from 'express';

const userController = new UserController();

const shortenerRouter = Router();
shortenerRouter.route('/urlshortener').post(userController.register);

export default shortenerRouter;