import { Router } from 'express';
import userController from '../controllers/userController.js';

const userRouter = Router();

userRouter
    .route('/users')
    .get(userController.getAllUsers)


export default userRouter;
