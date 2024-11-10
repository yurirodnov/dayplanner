import express, { Request, Response } from 'express';

const app = express();
const port = 3000;

// Middleware для парсинга JSON
app.use(express.json());

// Простой маршрут
app.get('/', (req: Request, res: Response) => {
  res.send('Hello World!');
});

// Пример POST маршрута
app.post('/data', (req: Request, res: Response) => {
  const data = req.body;
  res.json({ received: data });
});

// Запуск сервера
app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});