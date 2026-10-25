import { Router } from "express";
import { UserController } from "./user.controllers";
import { auth } from "../../middlewares/checkAuth";
import { UserRole } from "../../../../generated/prisma/enums";

const router = Router();

router.post("/register", UserController.registerUser);
router.get("/me", auth(UserRole.ADMIN, UserRole.STUDENT), UserController.getMe);

export const UserRoutes = router;
