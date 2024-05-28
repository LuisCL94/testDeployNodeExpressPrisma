import { Router } from 'express';
import { PrismaClient } from '@prisma/client';

const routes = Router();
const prisma = new PrismaClient() // (instancia objeto)

routes.get('/list-books', async (req, res) => {
  const users = await prisma.book.findMany()

  return res.json(users);
});

export default routes;