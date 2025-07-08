const express=require('express');
const auth=require('../middleware/authorization');
const {createUser,login,verifyUser,updateUserById }=require('../controllers/user.controller');

const userRouter = express.Router();    


userRouter.post('/create', createUser);//localhost:3000/api/users/create
userRouter.post('/login', login);//localhost:3000/api/users/login
userRouter.get('/verify-user',  auth, verifyUser);//localhost:3000/api/users/verify-user
userRouter.put('/update-user/:id', auth, updateUserById);//localhost:3000/api/users/update-user/id


module.exports = userRouter;






