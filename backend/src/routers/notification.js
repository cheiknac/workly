import { Router } from 'express';
import notificationController from '../controllers/notificationCotroller.js';

const notifRouter = Router();

notifRouter
    .route('/notifications')
    .get(notificationController.getAllNotif)
    .post(notificationController.createNotification);


notifRouter
    .route('/notifications/:id')
    .get(notificationController.getOneNotif)
    .patch(notificationController.updNotification)
    .delete(notificationController.deleteNotification);


export default notifRouter;