import express, { Application, Request, Response } from "express";
import cors from "cors";
import { productsRouter } from "./app/modules/Products.router";
const app: Application = express();

// Middleware to handle CORS requests
app.use(cors());
// Middleware to parse JSON requests
app.use(express.json());

// Route to handle POST requests at /api/users
app.use('/api/v1/Products', productsRouter)

// Route to handle GET requests at /api/users
app.get("/", (req: Request, res: Response) => {
  res.send("Hello World!");
});

export default app;
