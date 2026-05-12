import { Router } from 'express';
import { getRecord, getRecords } from '../controllers/newsController.js';

const routes = Router();
routes.get('/', getRecords);
routes.get('/:slug', getRecord);

export const newsRoutes = routes;
