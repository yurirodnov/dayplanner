"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const app = (0, express_1.default)();
const port = 3000;
// Middleware для парсинга JSON
app.use(express_1.default.json());
// Простой маршрут
app.get('/', (req, res) => {
    res.send('Hello World!');
});
// Пример POST маршрута
app.post('/data', (req, res) => {
    const data = req.body;
    res.json({ received: data });
});
// Запуск сервера
app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});
