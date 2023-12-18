import express, { Request, Response } from "express";
import taskRoutes from "./routes/taskItem";
import categoryRoutes from "./routes/category";
import authorRoutes from "./routes/author";

const app = express();
const port = 3000;

app.use(express.json());

app.get("/", (req: Request, res: Response) => {
  res.send("Hello from TodoList Apis!");
});

app.use("/api/", taskRoutes);
app.use("/api/", categoryRoutes);
app.use("/api/", authorRoutes);

app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});