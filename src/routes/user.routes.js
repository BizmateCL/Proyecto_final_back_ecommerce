const express=require('express');
const auth=require('../middleware/authorization');
const {createUser,login,verifyUser,logout,updateUser }=require('../controllers/user.controller');

const userRouter = express.Router();    


userRouter.post('/create', createUser);//localhost:5000/api/users/create
userRouter.post('/login', login);//localhost:5000/api/users/login
userRouter.get('/verify-user', auth, verifyUser);//localhost:5000/api/users/verify-user
//router.get('/verify-user', authMiddleware, userController.verifyUser);
//userRouter.put('/update-user/:id', auth, updateUserById);//localhost:5000/api/users/update-user/id  .Proyecto anterior

userRouter.put('/update', auth, updateUser); //localhost:5000/api/users/update
userRouter.post('/logout', logout);//localhost:5000/api/users/logout/api/users/verify-user

module.exports = userRouter;








