import { Router } from 'express';

const router = Router();

router.post('/', (req, res, next) => {
  return res.status(201).send();
});

export { router };
