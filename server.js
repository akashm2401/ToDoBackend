// import express from  'express';
import express from 'express';
import { todoRoutes } from './routes/todo.routes.js';

const app = express();

app.use(express.json());

app.use("/todo", todoRoutes)

app.listen(5000, () => {console.log("server is listning on for 5000")});