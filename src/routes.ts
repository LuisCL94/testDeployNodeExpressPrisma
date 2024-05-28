import { Router } from 'express';

const routes = Router();

routes.get('/testr', (req, res) => {
  return res.json({ message: 'Aeee Hello World' });
});

export default routes;