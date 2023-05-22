const express = require('express');
const app = express();
const cors = require('cors')
const authRouter = require('./routes/auth')
const userRouter = require('./routes/user')
const fileUploadRouter = require('./routes/fileuploadRoute')
const {errorMiddleWare}= require("./middlewares/middleware")

app.use(cors());
app.use(express.json());
app.use(express.static("uploads"))
app.use("/auth",authRouter);
app.use("/user",userRouter);
app.use("/uploads",fileUploadRouter)

app.use(errorMiddleWare);

module.exports = app;