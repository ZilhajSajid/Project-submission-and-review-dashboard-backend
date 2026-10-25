import { Request, Response } from "express";
import { catchAsync } from "../../utils/catchAsync";
import { UserService } from "./user.service";
import { sendResponse } from "../../utils/sendResponse";
import httpStatus from "http-status";
import { AppError } from "../../utils/AppError";

const registerUser = catchAsync(async (req: Request, res: Response) => {
  const payload = req.body;

  const result = await UserService.registerUser(payload);
  sendResponse(res, {
    success: true,
    statusCode: httpStatus.CREATED,
    message: "user created successfully",
    data: result,
  });
});

const getMe = catchAsync(async (req: Request, res: Response) => {
  const user = req.user;
  if (!user) {
    throw new AppError(
      httpStatus.NOT_FOUND,
      "user information is missing in the request",
    );
  }
  const result = await UserService.getMeFromDb(user);
  sendResponse(res, {
    success: true,
    statusCode: httpStatus.OK,
    message: "User profile fetched successfully",
    data: result,
  });
});
export const UserController = { registerUser, getMe };
