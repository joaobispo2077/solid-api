import { Router } from 'express';

import { createUserController } from './useCases/CreateUser';

const router = Router();

router.post('/', (req, res, next) => {
  return createUserController.handle(req, res);
});

export { router };
