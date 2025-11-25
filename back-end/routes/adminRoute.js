import express from 'express';
import userController from '../controllers/userController.js';

const { adminLogin } = userController;

const adminRouter = express.Router();

adminRouter.post('/login', adminLogin);

export default adminRouter;
