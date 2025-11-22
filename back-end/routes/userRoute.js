import express from 'express';
import userController from '../controllers/userController.js';

const userRouter = express.Router();

const { registerUser, loginUser, adminLogin } = userController;

userRouter.post('/register', registerUser);
userRouter.post('/login', loginUser);
userRouter.post('/admin', adminLogin);


export default userRouter;