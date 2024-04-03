import { initServer, app } from "./server.js";
import userRouter from './src/features/users/users.router.js'
import todosRouter from './src/features/todos/todos.router.js';

initServer();

app.use("/user",userRouter);
app.use("",todosRouter);
