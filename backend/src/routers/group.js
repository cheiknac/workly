import { Router } from 'express';
import groupController from '../controllers/groupController.js';

const groupRouter = Router();

groupRouter
    .route('/groups')
    .get(groupController.getAllGroup)
    .post(groupController.createGroup);

groupRouter
    .route('/groups/:id')
    .get(groupController.getOneGroup)
    .patch(groupController.updGroup)
    .delete(groupController.deleteGroup);

export default groupRouter;