import { Router } from 'express';
import { PrismaClient } from '@prisma/client';

const routes = Router();
const prisma = new PrismaClient() // (instancia objeto)

routes.get('/list-books', async (req, res) => {
  const books = await prisma.book.findMany()

  return res.json(books);
});

export default routes;