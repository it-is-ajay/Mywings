import express from "express";
import bodyParser from"body-parser";
import userRoute from "./routes/userRouter.js"
import adminRouter from "./routes/admin.route.js";
import postRouter from "./routes/post.route.js";

const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true})); 


app.use("/admin",adminRouter);
app.use("/user",userRoute);
app.use("/post",postRouter);

app.listen(3000,()=>{
    console.log("server started...");
});



// http://localhost:3000/user/searchProfile/:keyword