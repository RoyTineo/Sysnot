import express from "express";

import personasRoutes from "./routes/persona.routes.js";


const app = express();

app.use(express.json());

app.use(personasRoutes);

//middlewware
app.use((req, res, next) => {
  res.status(404).json({ message: "Endpoint no found" });
});

export default app;
