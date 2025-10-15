import { Router } from 'express';
import announcementController from '../controllers/announcementController.js';

const anmRouter = Router();

anmRouter
    .route('/announcement')
    .get(announcementController.getAllAnnouncement);

anmRouter
    .route('/announcement/:id')
    .get(announcementController.getOneAnnouncement);

export default anmRouter;