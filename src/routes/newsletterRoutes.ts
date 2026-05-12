import { Router } from 'express';
import { createRecord, deleteRecord } from '../controllers/newsletterController.js';
import { Authorize } from '../middleware/authMiddleware.js';

const router = Router();
router.post('/', createRecord);
router.delete('/:id', Authorize, deleteRecord);

export const newsletterRoutes = router;
