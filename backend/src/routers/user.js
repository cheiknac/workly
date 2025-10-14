import { Router } from 'express';
import userController from '../controllers/userController.js';

const userRouter = Router();

userRouter
    .route('/users')
    .get(userController.getAllUsers)
    .post(userController.createUser);

userRouter
    .route('/users/:id')
    .get(userController.getOneUser)
    .patch(userController.updateUser)
    .delete(userController.deleteUser);


export default userRouter;
