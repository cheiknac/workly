import { Router } from 'express';
import eventController from '../controllers/eventController.js';

const evtRouter = Router();

evtRouter
    .route('/events')
    .get(eventController.getAllEvent)
    .post(eventController.createEvent);

evtRouter
    .route('/events/:id')
    .get(eventController.getOneEvent)
    .patch(eventController.updateEvent)
    .delete(eventController.deleteEvent);


export default evtRouter;