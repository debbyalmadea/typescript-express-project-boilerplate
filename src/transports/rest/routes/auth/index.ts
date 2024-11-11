import { AuthController } from "@/api/controllers";
import { AuthService } from "@/api/services";
import { Router } from "express";

const authRoutes = Router();
const authService = new AuthService();
const authController = new AuthController(authService);

authRoutes.post("/login", authController.login);

export default authRoutes;
