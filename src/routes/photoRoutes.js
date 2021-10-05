import { Router } from 'express';

import PhotoController from '../controllers/PhotoController';

const router = new Router();

router.post('/', PhotoController.create);

export default router;
