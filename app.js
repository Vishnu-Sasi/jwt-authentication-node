const express = require('express');
const app = express();
const authRouter = require('./routes/auth')
const userRouter = require('./routes/user')
const {errorMiddleWare}= require("./middlewares/middleware")

app.use(express.json());

app.use("/auth",authRouter);
app.use("/user",userRouter);

app.use(errorMiddleWare);

module.exports = app;