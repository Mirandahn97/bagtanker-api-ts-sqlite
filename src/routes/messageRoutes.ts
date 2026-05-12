import { Router } from 'express';
import { getRecords, getRecord, createRecord, deleteRecord } from '../controllers/messageController.js';
import { Authorize } from '../middleware/authMiddleware.js';

const router = Router();
router.get('/', getRecords);
router.get('/:id', getRecord);
router.post('/', createRecord);
router.delete('/:id', Authorize, deleteRecord);

export const messageRoutes = router;
