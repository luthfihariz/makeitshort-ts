import UserController from '../controller/user.controller';
import {Router} from 'express';

const userController = new UserController();

const userRouter = Router();
userRouter.route('/user').post(userController.register);

export default userRouter;