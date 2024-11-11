import { Router } from "express";
import authRoutes from "./auth";

const routes = Router();
routes.use("/auth", authRoutes);
routes.get("/healthcheck", (req, res) => {
  res.send("OK");
});

export default routes;
